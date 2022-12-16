import HomeCtx from '../../context/HomeContext'
import { memo, useContext } from 'react'
import css from './styles.module.css'
import NoResultSticker from '../../assets/images/no-result-sticker.svg'
import MovieCard from '../MovieCard'

function ResultBox() {
    const { results } = useContext(HomeCtx)
    return (
        <div className={css.result}>
            {results && !results.length ? (
                <div className={css.no_result_container}>
                    <img src={NoResultSticker} alt='no result'></img>
                    <h1>No Results Found</h1>
                    <p>
                        We cannot find the item matching your search 😞 Please
                        try again.
                    </p>
                </div>
            ) : (
                <div className={css.result_container}>
                    {results?.map((result) => (
                        <MovieCard key={result.id} movie={result} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default memo(ResultBox)
