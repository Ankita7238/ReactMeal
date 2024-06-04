import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li className={classes.cartlist} key={item.id}>
          {item.name} - {item.quantity} x ${item.price.toFixed(2)}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal setIsClose={props.setIsClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={() => props.setIsClose(false)}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

//****************** */