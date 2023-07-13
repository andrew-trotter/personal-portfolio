import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFruits } from '../apis/api'

export const fetchProjects = createAsyncThunk('slice/fetchProjects', async () => {
  return await getFruits()
})

const slice = createSlice({
  name: 'projects',
  initialState: [] as string[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (_, action) => {
      return action.payload
    })
  },
})

export default slice.reducer
