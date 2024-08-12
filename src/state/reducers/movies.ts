import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieState } from '../../components/movie/movie.type'
import type { RootState } from '../store'

const initialState = {
    movieLists: [],
    movieSelected: {
        "id": 0,
        "title": '',
        "year": 0,
        "genre": [],
        "rating": 0,
        "director": '',
        "actors": [],
        "plot": '',
        "poster": '',
        "trailer": '',
        "runtime": 0,
        "awards": '',
        "country": '',
        "language": '',
        "boxOffice": '',
        "production": '',
        "website": ''
    }
}

export const movieSlice = createSlice({
    name: 'movieData',
    initialState,
    reducers: {
        saveMovieList: (state: any, action: { payload: [MovieState] }) => {
            return { ...state, movieLists: action.payload }
        },
        saveMovieSelected: (state: any, action: { payload: MovieState }) => {
            return { ...state, movieSelected: action.payload }
        },
    }
})

export const { saveMovieList, saveMovieSelected } = movieSlice.actions

export const selectMovieData = (state: RootState) => state.movieLists

export default movieSlice.reducer