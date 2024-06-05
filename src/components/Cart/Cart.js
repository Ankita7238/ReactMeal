import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems= cartCtx.items.length>0
 
  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item);    
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={()=>cartItemRemoveHandler(item)}
          onAdd={()=>cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );


  return (
    <Modal setIsClose={props.setIsClose}>
      {hasItems ? cartItems : <p>Add some items to the cart.</p>}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={() => props.setIsClose(false)}>Close</button>
        {hasItems && (<button className={classes.button}>Order</button>)}
      </div>
    </Modal>
  );
};

export default Cart;

//****************** */