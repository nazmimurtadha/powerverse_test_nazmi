import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movies'

export const store = configureStore({
    reducer: {
        movieLists: movieReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store