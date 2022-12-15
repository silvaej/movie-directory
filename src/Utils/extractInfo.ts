export function extractInfo(data: any) {
    return (({
        id,
        genre_ids,
        original_title,
        overview,
        poster_path,
        release_date,
    }) => ({
        id,
        genre_ids,
        original_title,
        overview,
        poster_path,
        release_date,
    }))(data)
}
