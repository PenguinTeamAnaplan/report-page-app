import { createSlice } from '@reduxjs/toolkit';
import initialState from '../reportPageData';

import jsonpath from 'jsonpath';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    actionUpdateProps: (state, action) => {
      const { id, prop, value } = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      jsonpath.apply(state, `$..[?(@.id=="${id}")].${prop}`, () => {
        return value;
      });
    },
  },
});

export const { actionUpdateProps } = layoutSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(makeAPICall())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const makeAPICall = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(updateProps());
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectLayout = (state) => state.layout;

export default layoutSlice.reducer;