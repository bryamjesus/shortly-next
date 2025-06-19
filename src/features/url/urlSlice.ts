import { UrlState } from '@/lib/url.interface';
import { existsShortCode } from '@/utils/valideUrl';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UrlState[] = [];

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    addUrlShort: (state, action: PayloadAction<UrlState>) => {
      const exists = existsShortCode(action.payload.shortCode, state);
      if (!exists) {
        state.push(action.payload);
      }
    },
    resetUrls: () => initialState,
  },
});

export const { addUrlShort, resetUrls } = urlSlice.actions;

export default urlSlice.reducer;
