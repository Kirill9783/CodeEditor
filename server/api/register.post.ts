import { db, schema } from 'hub:db'
import { users } from "hub:db:schema";
import { validateEmail, validatePassword } from "~/utils/validation";

//Вставляем пользователя вручную
// export default eventHandler(async (event) => {
//   return await db.insert(schema.users).values({
//     email: 'jane@example.com',
//     password: await hashPassword('password'),
//   }).returning({
//     id: users.id,
//     email: users.email,
//   }).get()
// })

export default eventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const emailError = validateEmail(email);

  if (emailError) {
    throw createError({
      statusCode: 400,
      message: emailError
    })
  }

  const passwordError = validatePassword(password);

  if (passwordError) {
    throw createError({
      statusCode: 400,
      message: passwordError
    })
  }

  const hashedPassword = await hashPassword(password);

  //21-33 - проверяем есть ли такой пользователь в базе
  const existingUser = await db
    .select()
    .from(schema.users)
    .where(eq(users.email, email))
    .get();

  if (existingUser) {
    throw createError({
      statusCode: 409,
      message: 'Email already registered!',
    })
  }

  //Создаем нового пользователя
  const newUser = await db.insert(schema.users).values({
    email,
    password: hashedPassword,
  }).returning({
    id: users.id,
    email: users.email,
  }).get()

  //Создаем Cookies
  await setUserSession(event, {
    user: {
      id: newUser.id,
      email: newUser.email,
    },
    loggedInAt: Date.now(),
  })

  return newUser
})