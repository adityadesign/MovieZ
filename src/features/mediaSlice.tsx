import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MediaState {
  nowPlaying: string,
  topRated: string,
  upcoming: string
}

const initialState: MediaState = {
  nowPlaying: 'movie',
  topRated: 'movie',
  upcoming: 'movie'
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
    setUpcomingMediaType: (state, action: PayloadAction<string>) => {
      state.upcoming = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setNowPlayingMediaType, setTopRatedMediaType, setUpcomingMediaType } = mediaSlice.actions

export default mediaSlice.reducer