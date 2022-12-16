import { createContext, Dispatch } from 'react'
import FiltersInterface from '../interfaces/FilterInterface'
import { MovieSkeleton } from '../interfaces/MovieSkeleton'

interface HomeContexInterface {
    activeFilters?: Array<FiltersInterface>
    results?: Array<MovieSkeleton>
    page?: number
    loading?: boolean
    lastPage?: number
    filters?: Array<FiltersInterface>
    featureMovie?: MovieSkeleton
    openFilterBox?: boolean
    header?: string
    isSearching?: boolean
    searchQuery?: string
    dispatch?: Dispatch<any>
    setOpenFilterBox?: Dispatch<any>
    setPage?: Dispatch<any>
    setLoading?: Dispatch<any>
    setLastPage?: Dispatch<any>
    setResults?: Dispatch<any>
    setHeader?: Dispatch<any>
    setIsSearching?: Dispatch<any>
    setSearchQuery?: Dispatch<any>
}

const HomeCtx = createContext<HomeContexInterface>({})

export default HomeCtx
