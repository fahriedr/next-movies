import axios from 'axios'
import { responseAPI } from "./axios-helper";
const api_key = process.env.NEXT_PUBLIC_API_KEY


export const getAllGenres = async () => {
    const res = await responseAPI('GET', 'genre/movie/list')

    return res.data.genres
}

export const getGenre = async (genres=[]) => {

    let allGenre = await getAllGenres()

    let listGenre = []

    genres.forEach(id => {
        allGenre.filter((el) => {
            if(el.id == id){
                listGenre.push(el.name)
            }
        })
    });

    return listGenre

}