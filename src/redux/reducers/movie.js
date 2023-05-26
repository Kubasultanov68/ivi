import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../utils/axios"
export const getMovies = createAsyncThunk(
    'movie/getMovies',
    async (filter,{rejectWithValue}) => {
        try {
            const query = `${filter.genre ? `genres.name=${filter.genre}` : ''}`
            const year = `${filter.year ? `year=${filter.year}` : ''}`;
            const country = `${filter.country ? `countries.name=${filter.country}` : ''}`;
            const res = await instance(`/movie?limit=30&${query}&${year}&${country}`)
            if (res.status !== 200) {
                throw new Error('request error')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        data: [],
        error: '',
        status: '',
        filter: {
            limit: 20,
            page: 1,
            country: '',
            year: '',
            genre: ''
        }
    },
    reducers: {
        changeGenres: (state, {payload}) => {
            state.filter = {
                ...state.filter,
                genre: payload
            }
        },
        changeYears: (state, {payload}) => {
            state.filter = {
                ...state.filter,
                year: payload
            }
        },
        changeCountries: (state, {payload}) => {
            state.filter = {
                ...state.filter,
                country: payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state, {payload}) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getMovies.rejected, (state, {payload}) => {
            state.status = 'error'
            state.error = payload
        })
        builder.addCase(getMovies.fulfilled, (state, {payload}) => {
            state.status = 'done'
            state.data = payload.docs
        })
    }
})


export const {changeGenres, changeYears, changeCountries} = movieSlice.actions

export default movieSlice.reducer