import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProjects } from '../apis/api'

export const fetchProjects = createAsyncThunk('slice/fetchProjects', async () => {
  return await getProjects()
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
