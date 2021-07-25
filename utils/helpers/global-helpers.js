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

export const stringToSlug = (str) => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}