import { createSelector } from 'reselect'; 

const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartitems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity , 0)
);