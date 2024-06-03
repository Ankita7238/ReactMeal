import CartIcon from "../Cart/CartIcon.js"
import classes from "./HeaderCartButton.module.css"
export default function  HeaderCartButton(props)
{
    const handleOpenCart=()=>
    {
        props.setIsOpen(true)
    }
    return(
            <button className={classes.button} onClick={handleOpenCart}>
                <span className={classes.icon}>
                <CartIcon />
                </span>
                <span className={classes.badge}>0</span>
            </button>   
    )

} 