import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './slices/main/mainSlice'

export const store = configureStore({
  reducer: {
    mainSlice: mainSlice
  },
})