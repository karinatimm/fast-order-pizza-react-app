import { configureStore } from '@reduxjs/toolkit';
import userReducer from './entities/userSlice';
import cartReducer from './entities/cartSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});

export default store;
