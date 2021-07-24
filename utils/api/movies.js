import { responseAPI } from '../helpers/axios-helper'

export const getPopularMovies = async () => {
    const res = await responseAPI('GET', 'movie/popular')

    return res
}

export const getNowPlayingMovies = async () => {
    const res = await responseAPI('GET', 'movie/now_playing')

    return res
}

export const getTopRatedMovies = async () => {
    const res = await responseAPI('GET', 'movie/top_rated')

    return res
}