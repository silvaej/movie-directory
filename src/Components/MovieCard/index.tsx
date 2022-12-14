import { memo, useState } from 'react'
import { MovieSkeleton } from '../../Interfaces/MovieSkeleton'
import css from './styles.module.css'

interface Props {
    movie: MovieSkeleton
}

function MovieCard(props: Props) {
    const { genres, id, original_title, overview, release_date } = props.movie

    const [expanded, setExpanded] = useState<boolean>(false)
    return (
        <div className={css.container}>
            <div className={css.banner}></div>
            <div className={css.content}>
                <div className={css.header_area}>
                    <h1>{original_title}</h1>
                    <p>({new Date(release_date).getFullYear()})</p>
                    <button>Read more</button>
                </div>
                <div className={css.genres_section}>{genres?.join(', ')}</div>
                <div
                    className={`${css.overview_section} ${
                        !expanded ? css.overview_section_shrink : ''
                    }`}
                    onClick={() => setExpanded(!expanded)}>
                    {overview ? overview : 'No available synopsis.'}
                </div>
            </div>
        </div>
    )
}

export default memo(MovieCard)
