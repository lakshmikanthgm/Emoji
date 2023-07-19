import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Emoji {
  name: string
  category: string
  group: string
  htmlCode: string[]
  unicode: string[]
}

export interface EmojiState {
  emojis: Emoji[]
  loading: boolean
  error: string | undefined
  currentPage: number
  pageSize: number
  category: string
}

const initialState: EmojiState = {
  emojis: [],
  loading: false,
  error: undefined,
  currentPage: 1,
  pageSize: 10,
  category: 'All'
};

export const emojisSlice = createSlice({
  name: "emojiState",
  initialState,
  reducers: {
    setEmojis: (state, actions: PayloadAction<Emoji[]>) => {
      state.emojis = [...actions.payload]
      state.loading = false
    },
    setLoading: (state, actions: PayloadAction<boolean>) => {
      state.loading = actions.payload
      if (actions.payload) {
        state.error = undefined
      }
    },
    setError: (state, actions: PayloadAction<string>) => {
      state.error = actions.payload
      state.loading = false
    },
    setCurrentPage: (state, actions: PayloadAction<number>) => {
      state.currentPage = actions.payload
    },
    setCategory: (state, actions: PayloadAction<string>) => {
      state.category = actions.payload
      state.currentPage = 1
    },
  },
});

export const { setEmojis, setLoading, setError, setCurrentPage, setCategory } = emojisSlice.actions;

export default emojisSlice.reducer;