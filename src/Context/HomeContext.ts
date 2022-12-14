import { createContext, Dispatch } from 'react'
import FiltersInterface from '../Interfaces/FilterInterface'
import { MovieSkeleton } from '../Interfaces/MovieSkeleton'

interface HomeContexInterface {
    activeFilters?: Array<FiltersInterface>
    results?: Array<MovieSkeleton>
    page?: number
    loading?: boolean
    lastPage?: number
    filters?: Array<FiltersInterface>
    openFilterBox?: boolean
    dispatch?: Dispatch<any>
    setOpenFilterBox?: Dispatch<any>
    setPage?: Dispatch<any>
    setLoading?: Dispatch<any>
    setLastPage?: Dispatch<any>
}

const HomeCtx = createContext<HomeContexInterface>({})

export default HomeCtx
