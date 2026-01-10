import { db, schema } from 'hub:db'
import { users } from "hub:db:schema";

export default eventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (!email  || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email or password are required',
    })
  }

  //21-33 - проверяем есть ли такой пользователь в базе
  const user = await db
    .select()
    .from(schema.users)
    .where(eq(users.email, email))
    .get();

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  const isPasswordValid = await verifyPassword(user.password, password);

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    })
  }

  //Создаем Cookies
  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
    },
    loggedInAt: Date.now(),
  })

  return {
    id: user.id,
    email: user.email,
  }
})