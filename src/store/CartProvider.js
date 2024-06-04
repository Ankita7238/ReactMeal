import React, { useState} from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCartHandler = (item) => {
        console.log(item)
        setCartItems((prevItems) => {
            // Check if the item with the same name already exists
            const exists = prevItems.some(i => i.name === item.name);

            if (exists) {
                return prevItems.map(i =>
                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeItemFromCartHandler = (item) => {
        setCartItems((prevItems) => {
            // Check if the item with the same name exists
            const itemIndex = prevItems.findIndex(i => i.name === item.name);

            if (itemIndex === -1) {
                console.log(`Item with name ${item.name} not found in the cart.`);
                return prevItems;
            }

            const existingItem = prevItems[itemIndex];
            if (existingItem.quantity === 1) {
                // Remove the item entirely
                return prevItems.filter(i => i.name !== item.name);
            } else {
                // Decrease the quantity by 1
                return prevItems.map(i =>
                    i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
                );
            }
        });
    };

    const cartContext = {
        items: cartItems,
        totalAmount: cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
 export default CartProvider