import React, { useState, useEffect, useContext } from 'react';
import classes from './MealForm.module.css';
import Input from '../UI/Input';
import CartContext from '../../store/cart-context';

export default function MealForm(props) {
    const cartCtx = useContext(CartContext);
    const cartItem = cartCtx.items.find(item => item.name === props.item.name);
    const initialAmount = cartItem ? cartItem.quantity : 0;
    const [amount, setAmount] = useState(initialAmount);

    useEffect(() => {
        if (cartItem) {
            setAmount(cartItem.quantity);
        }
    }, [cartItem]);

    const addToCart = (e) => {
        e.preventDefault();     
    };
    const incrementAmount = () => {
        setAmount((prevAmount) => prevAmount + 1);
        cartCtx.addItem({ ...props.item, quantity: 1 });
    };
    const decrementAmount = () => {
        if (amount > 0) {
            const newAmount = amount - 1;
            setAmount(newAmount);
            cartCtx.removeItem({ ...props.item, quantity: 1 });
        }
    };
    return (
        <form className={classes.form} onSubmit={addToCart}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '0',
                    max: '5',
                    step: '1',
                    value: amount,
                    readOnly: true
                }}
            />
            <button type="button" className={classes.left} onClick={incrementAmount}>+</button>
            <span className={classes.addtext}>ADD</span>
            <button type="button" className={classes.right} onClick={decrementAmount}>-</button>
        </form>
    );
}
