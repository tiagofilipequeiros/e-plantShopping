import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const index = state.items.findIndex(item => item.name === name);
        if (index !== -1) {
            state.items[index] = {
            ...state.items[index],
            quantity: state.items[index].quantity + 1,
            };
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        const { name } = action.payload;
        state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name, amount } = action.payload;
        const index = state.items.findIndex(item => item.name === name);
        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            quantity: amount,
          };
        }
      }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
