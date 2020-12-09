import { configureStore } from '@reduxjs/toolkit';
import layout from './layoutSlice';

export default configureStore({
  reducer: {
    layout,
  },
});
