import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../features/url/urlSlice';

const store = configureStore({
  reducer: {
    url: urlReducer,
  },
});

// export const makeStore = () => {
//   return configureStore({
//     reducer: { url: urlReducer },
//   });
// };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
