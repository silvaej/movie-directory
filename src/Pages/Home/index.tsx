import { useState, useReducer, useEffect } from 'react'

/* COMPONENTS */
import MainToolBar from '../../Components/MainToolBar'

/* REDUCER */
import filterReducer from '../../Reducers/FilterReducer'

/* CONTEXT */
import HomeCtx from '../../Context/HomeContext'

/* INTERFACES */
import FiltersInterface from '../../Interfaces/FilterInterface'

/* STYLING ASSETS */
import css from './styles.module.css'
import FilterSection from '../../Components/FilterSection'
import ResultBox from '../../Components/ResultBox'
import Pagination from '../../Components/Pagination'
import { getAllGenres, getPopular } from '../../Utils/api'
import { MovieSkeleton } from '../../Interfaces/MovieSkeleton'

function Home() {
    const [activeFilters, dispatch] = useReducer(filterReducer, [])
    const [filters, setFilters] = useState<Array<FiltersInterface>>([])
    const [page, setPage] = useState<number>(1)
    const [lastPage, setLastPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)
    const [results, setResults] = useState<Array<MovieSkeleton>>([])
    const [selectedMovie, setSelectedMovie] = useState<any>()
    const [openFilterBox, setOpenFilterBox] = useState<boolean>(false)

    useEffect(() => {
        ;(async () => {
            setLoading(true)

            // Retrieving genres
            const genres = await getAllGenres()
            setFilters(genres)

            // Retrieving movies
            const [movies, totalPage] = await getPopular(1)
            const moviesWithGenre = movies.map((movie: any) => {
                return {
                    ...movie,
                    genres: genres
                        .filter((genre: any) =>
                            movie.genre_ids.includes(genre.id)
                        )
                        .map((genre: any) => genre.name),
                }
            })

            setResults(moviesWithGenre)

            setLastPage(totalPage)

            setLoading(false)
        })()
    }, [])

    return (
        <HomeCtx.Provider
            value={{
                activeFilters,
                results,
                page,
                loading,
                lastPage,
                filters,
                openFilterBox,
                dispatch,
                setOpenFilterBox,
                setPage,
                setLoading,
                setLastPage,
            }}>
            <main className={css.container}>
                <section className={css.movies_directory}>
                    <div className={css.directory_content}>
                        <div className={css.toolbar}>
                            <MainToolBar />
                            {!!activeFilters.length && <FilterSection />}
                        </div>
                        <ResultBox />
                    </div>
                    <Pagination />
                </section>
                <section className={css.movie_information}></section>
            </main>
        </HomeCtx.Provider>
    )
}

export default Home
