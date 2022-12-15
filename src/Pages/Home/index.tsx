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
import {
    getAllGenres,
    getNowShowing,
    getPopular,
    searchMovie,
} from '../../Utils/api'
import { MovieSkeleton } from '../../Interfaces/MovieSkeleton'
import Content from '../../Components/Content'
import FeatureMovie from '../../Components/FeatureMovie'
import { transformGenre } from '../../Utils/transformGenre'

function Home() {
    const [activeFilters, dispatch] = useReducer(filterReducer, [])
    const [filters, setFilters] = useState<Array<FiltersInterface>>([])
    const [page, setPage] = useState<number>(1)
    const [lastPage, setLastPage] = useState<number>(1)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [results, setResults] = useState<Array<MovieSkeleton>>([])
    const [featureMovie, setFeatureMovie] = useState<MovieSkeleton>()
    const [header, setHeader] = useState<string>('Popular Movies')
    const [isSearching, setIsSearching] = useState<boolean>(false)
    // const [selectedMovie, setSelectedMovie] = useState<any>()
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
                    genres: transformGenre(movie.genre_ids, genres),
                }
            })

            const result = await getNowShowing()
            setFeatureMovie({
                ...result,
                genres: transformGenre(result.genre_ids, genres),
            })

            setResults(moviesWithGenre)

            setLastPage(totalPage ? totalPage : 1)

            setLoading(false)
        })()
    }, [])

    useEffect(() => {
        ;(async () => {
            if (!isSearching) {
                const [movies] = await getPopular(page)
                const moviesWithGenre = movies.map((movie: any) => {
                    return {
                        ...movie,
                        genres: transformGenre(movie.genre_ids, filters),
                    }
                })

                setResults(moviesWithGenre)
            } else {
                const [movies] = await searchMovie(searchQuery, page)
                const moviesWithGenre = movies.map((movie: any) => {
                    return {
                        ...movie,
                        genres: transformGenre(movie.genre_ids, filters),
                    }
                })

                setResults(moviesWithGenre)
            }
        })()
    }, [page, filters])

    return (
        <HomeCtx.Provider
            value={{
                activeFilters,
                results,
                page,
                loading,
                lastPage,
                filters,
                featureMovie,
                header,
                isSearching,
                openFilterBox,
                searchQuery,
                dispatch,
                setOpenFilterBox,
                setPage,
                setLoading,
                setLastPage,
                setResults,
                setHeader,
                setIsSearching,
                setSearchQuery,
            }}>
            <main className={css.container}>
                <section className={css.main_section}>
                    <MainToolBar />
                    <Content />
                </section>
                <section className={css.now_showing_section}>
                    <FeatureMovie />
                </section>
            </main>
        </HomeCtx.Provider>
    )
}

export default Home
