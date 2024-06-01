import CartIcon from "../Cart/CartIcon.js"
import classes from "./HeaderCartButton.module.css"
export default function  HeaderCartButton()
{
    return(
            <button className={classes.button}>
                <span className={classes.icon}>
                <CartIcon />
                </span>
                <span className={classes.badge}>0</span>
            </button>   
    )

} 