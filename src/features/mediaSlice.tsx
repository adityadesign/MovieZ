import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MediaState {
  nowPlaying: string,
  topRated: string
}

const initialState: MediaState = {
  nowPlaying: 'movie',
  topRated: 'movie'
}

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setNowPlayingMediaType: (state, action: PayloadAction<string>) => {
      state.nowPlaying = action.payload
    },
    setTopRatedMediaType: (state, action: PayloadAction<string>) => {
      state.topRated = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setNowPlayingMediaType, setTopRatedMediaType } = mediaSlice.actions

export default mediaSlice.reducer