import { memo, useContext } from 'react'
import HomeCtx from '../../context/HomeContext'
import css from './styles.module.css'
import TICKET from '../../assets/images/ticket-icon.svg'

function FeatureMovie() {
    const { featureMovie } = useContext(HomeCtx)
    return (
        <div className={css.container}>
            {featureMovie && (
                <>
                    <h1 className={css.now_showing}>NOW SHOWING!!!</h1>
                    <img
                        className={css.feature_image}
                        src={`https://image.tmdb.org/t/p/w500/${featureMovie.poster_path}`}
                        alt='movie poster'></img>
                    <div className={css.title_trailer}>
                        <h1>{featureMovie.original_title}</h1>
                        <button>Watch Trailer</button>
                    </div>
                    <h2 className={css.genres}>
                        {featureMovie.genres?.join(', ')}
                    </h2>
                    <p className={css.overview}>{featureMovie.overview}</p>
                    <div className={css.buy_ticket}>
                        <img src={TICKET} alt='ticket'></img>
                        <span>Buy your ticket here</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default memo(FeatureMovie)
