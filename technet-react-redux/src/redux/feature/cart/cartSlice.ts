import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

type ICartState = {
  products: IProduct[];
  total: number;
};

const initialState: ICartState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductInCart = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (isProductInCart) {
        isProductInCart.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeSingleProductFromCart: (state, action) => {
      const isProductInCart = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isProductInCart && isProductInCart.quantity! > 1) {
        isProductInCart.quantity! -= 1;
        state.total -= action.payload.price;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.total -= action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeFromCart, removeSingleProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
