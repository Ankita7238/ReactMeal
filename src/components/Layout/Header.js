import React from "react"
import meals from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton.js"

export default function Header()
{
    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt='hero image'/>
        </div>
      </>
        
    )
}