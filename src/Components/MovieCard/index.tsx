import { memo } from 'react'
import { MovieSkeleton } from '../../interfaces/MovieSkeleton'
import css from './styles.module.css'

interface Props {
    movie: MovieSkeleton
}

function MovieCard(props: Props) {
    const { id, poster_path, original_title, overview } = props.movie

    return (
        <div className={css.container}>
            <img
                className={css.movie_poster}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt='poster'></img>
            <h1 className={css.movie_title}>{original_title}</h1>
            <p className={css.movie_synopsis}>{overview}</p>
            <a className={css.movie_read_more} href='#'>
                Read more...
            </a>
        </div>
    )
}

export default memo(MovieCard)
