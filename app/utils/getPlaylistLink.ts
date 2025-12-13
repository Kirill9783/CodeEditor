import type {Playlist} from "~/stores/playlists";
import type {Lesson} from "~/stores/lessons";

export function getPlaylistLink(playlist: Playlist, lesson?: Lesson) {

    if (!lesson) {
        throw createError({statusCode: 404, message: `Lesson not found`});
    }

    // if (!lesson) {
    //     throw404('Lesson not found')
    // }

    return `/playlists/${slugify(playlist.title)}/lessons/${slugify(lesson.title)}`
}