import axios from 'axios'
import { MovieSkeleton } from '../Interfaces/MovieSkeleton'
import { extractInfo } from './extractInfo'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.REACT_APP_API_KEY

export async function getPopular(page: number) {
    const ROUTE = '/movie/popular'
    const response = await axios.get(`${BASE_URL}${ROUTE}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page,
        },
    })

    const results = response.data.results.map((item: MovieSkeleton) => {
        return extractInfo(item)
    })

    return [results, 500]
}

export async function getAllGenres() {
    const ROUTE = '/genre/movie/list'
    const response = await axios.get(`${BASE_URL}${ROUTE}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        },
    })

    return response.data.genres
}

export async function getNowShowing() {
    const ROUTE = '/movie/now_playing'
    const response = await axios.get(`${BASE_URL}${ROUTE}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
        },
    })

    return extractInfo(response.data.results[0])
}

export async function searchMovie(query: string, page: number) {
    const ROUTE = '/search/movie'
    const response = await axios.get(`${BASE_URL}${ROUTE}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            include_adult: false,
            page,
            query,
        },
    })

    const results = response.data.results.map((item: MovieSkeleton) => {
        return extractInfo(item)
    })

    return [results, response.data.total_pages]
}
