import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDeals,
} from './dealsOperations';
import { logOut } from '../user/authOperations';

const dealsArray = [
  {
    name: 'The Marina Torch',
    cost: 6500000,
    tiketPrice: 60000,
    yield: 9.25,
    daysNumber: 150,
    sold: 75,
  },
  {
    name: 'HHHR Tower',
    cost: 6500000,
    tiketPrice: 60000,
    yield: 9.25,
    daysNumber: 150,
    sold: 75,
  },
  {
    name: 'Ocean peaks',
    cost: 6500000,
    tiketPrice: 60000,
    yield: 9.25,
    daysNumber: 150,
    sold: 75,
  },
  {
    name: 'Al Yaqoub Tower',
    cost: 6500000,
    tiketPrice: 60000,
    yield: 9.25,
    daysNumber: 150,
    sold: 75,
  },
];

const initialState = {
  deals: dealsArray,
  isLoading: false,
  error: null,
  message: '',
};

const pendingReducer = (state) => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error =
    {
      message: action.payload?.message,
      error: action.payload?.error,
      statusCode: action.payload?.statusCode,
    } || 'An error occurred';
};

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    //
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.deals = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.deals = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer);
  },
});

export const dealsReducer = dealsSlice.reducer;
