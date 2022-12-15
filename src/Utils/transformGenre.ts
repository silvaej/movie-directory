export function transformGenre(
    genre_ids: Array<number>,
    genres: Array<any>
): Array<string> {
    return genres
        .filter((genre: any) => genre_ids.includes(genre.id))
        .map((genre: any) => genre.name)
}
