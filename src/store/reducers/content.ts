import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Content, ContentItem } from '../../models/content'

const initialState: Content = {
  content: [],
};

function test(...args: any[]) {
  console.log(args);
}

export const fetchContent = createAsyncThunk(
  'content/fetch',
  async (userId, thunkAPI) => {
    const response = (await fetch(`http://localhost:3001/content`)).json()
    return response;
  },
)

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addContent: (state, action: PayloadAction<Omit<ContentItem, 'id'>>) => {
      const newItem = { ...action.payload, id: String(Math.random()) }
      state.content = [...state.content, newItem]
    },
    removeContent: (state, action: PayloadAction<Pick<ContentItem, 'id'>>) => {
      state.content = state.content.filter((item) => item.id !== action.payload.id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.content = action.payload.content;
    })
  },
});

export const { addContent, removeContent } = contentSlice.actions;

export const contentReducer = contentSlice.reducer;