import { createSlice } from '@reduxjs/toolkit';

type IFilter = {
  status: boolean;
  priceRange: number;
};

const initialState: IFilter = {
  status: false,
  priceRange: 150,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByStatus: (state) => {
      state.status = !state.status;
    },
    filterByPrice: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { filterByStatus, filterByPrice } = filterSlice.actions;

export default filterSlice.reducer;
