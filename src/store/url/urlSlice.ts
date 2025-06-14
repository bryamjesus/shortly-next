import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UrlState {
  originalUrl: string;
  shortCode: string;
}

const initialState: UrlState[] = [];

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    addUrlShort: (state, action: PayloadAction<UrlState>) => {
      state.push(action.payload);
    },
    resetUrls: () => initialState,
  },
});

export const { addUrlShort, resetUrls } = urlSlice.actions;

export default urlSlice.reducer;
