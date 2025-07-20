import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks as fetchBooksApi } from '../api/booksApi';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await fetchBooksApi();
  return books;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;