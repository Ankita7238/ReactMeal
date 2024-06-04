import React, { useState, useContext } from 'react';
import classes from './MealForm.module.css';
import Input from '../UI/Input';
import CartContext from '../../store/cart-context';

export default function MealForm(props) {
    const cartCtx = useContext(CartContext);
    const [amount, setAmount] = useState(0);

    const addToCart = (e) => {
        e.preventDefault();     
    };
    const incrementAmount = () => {
        setAmount((prevAmount) => prevAmount + 1);
        cartCtx.addItem({ ...props.item, quantity: amount });
    };
    const decrementAmount = () => {
        if (amount > 0) {
            const newAmount = amount - 1;
            setAmount(newAmount);
            cartCtx.removeItem({ ...props.item, quantity: newAmount });
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
            <span>ADD</span>
            <button type="button" className={classes.right} onClick={decrementAmount}>-</button>
        </form>
    );
}
