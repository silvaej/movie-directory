import axios from 'axios'
import { MovieSkeleton } from '../Interfaces/MovieSkeleton'

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
        return (({
            id,
            genre_ids,
            original_title,
            overview,
            poster_path,
            release_date,
        }) => ({
            id,
            genre_ids,
            original_title,
            overview,
            poster_path,
            release_date,
        }))(item)
    })

    return [results, response.data.total_pages]
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
