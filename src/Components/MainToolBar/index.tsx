import SearchInput from '../SearchInput'
import css from './styles.module.css'
import SearchIcon from '../../assets/images/tool-search.svg'
import RefreshIcon from '../../assets/images/tool-refresh.svg'
import { memo, useState, useContext } from 'react'
import { getPopular, searchMovie } from '../../utils/api'
import { transformGenre } from '../../utils/transformGenre'
import HomeCtx from '../../context/HomeContext'

function MainToolBar() {
    const [query, setQuery] = useState<string>('')
    const {
        filters,
        setSearchQuery,
        setLastPage,
        setResults,
        setPage,
        setHeader,
        setIsSearching,
    } = useContext(HomeCtx)
    const handleChange = (q: string) => {
        setQuery(q)
    }

    const handleSubmit = () => {
        ;(async () => {
            const [data, total] = await searchMovie(query, 1)

            const dataWithGenre = filters
                ? data.map((item: any) => {
                      return {
                          ...item,
                          genres: transformGenre(item.genre_ids, filters),
                      }
                  })
                : data
            if (setLastPage) setLastPage(total ? total : 1)
            if (setPage) setPage(1)
            if (setResults) setResults(dataWithGenre)
            if (setHeader) setHeader(`Search Results for: ${query}`)
            if (setSearchQuery) setSearchQuery(query)
            if (setIsSearching) setIsSearching(true)
        })()
    }

    const handleRefresh = () => {
        ;(async () => {
            const [data, total] = await getPopular(1)

            const dataWithGenre = filters
                ? data.map((item: any) => {
                      return {
                          ...item,
                          genres: transformGenre(item.genre_ids, filters),
                      }
                  })
                : data
            if (setLastPage) setLastPage(total ? total : 1)
            if (setPage) setPage(1)
            if (setResults) setResults(dataWithGenre)
            if (setHeader) setHeader('Popular Movies')
            if (setSearchQuery) setSearchQuery('')
            if (setIsSearching) setIsSearching(false)
            setQuery('')
        })()
    }

    return (
        <div className={css.main_toolbar}>
            <SearchInput
                placeholder='Search movie title, genre, etc ...'
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                value={query}
            />
            <button className={css.search_button} onClick={handleSubmit}>
                <img src={SearchIcon} alt='go' />
            </button>
            <button className={css.search_button} onClick={handleRefresh}>
                <img src={RefreshIcon} alt='refresh' />
            </button>
        </div>
    )
}

export default memo(MainToolBar)
