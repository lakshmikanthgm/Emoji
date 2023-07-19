import { configureStore } from '@reduxjs/toolkit'
import emojiReducer from './reducers/emojiReducer'

const store = configureStore({
  reducer: {
    emojisState: emojiReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store
