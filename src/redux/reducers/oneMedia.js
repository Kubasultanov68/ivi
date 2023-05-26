import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../utils/axios"
export const getOneMedia = createAsyncThunk(
    'oneMedia/getOneMedia',
    async (id,{rejectWithValue}) => {
        try {
            const res = await instance(`/movie/${id}`)
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
        media: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getOneMedia.pending, (state, {payload}) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getOneMedia.rejected, (state, {payload}) => {
            state.status = 'error'
            state.error = payload
        })
        builder.addCase(getOneMedia.fulfilled, (state, {payload}) => {
            state.status = 'done'
            state.media = payload
        })
    }
})


export const {} = movieSlice.actions

export default movieSlice.reducer