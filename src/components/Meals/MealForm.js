import classes from './MealForm.module.css'
export default function MealForm()
{
    return (
        <>
        <form className={classes.form}>
           <div className={classes.input}>
                <label htmlFor="amt">Amount:</label>
                <input type="number" id="amt" min='1' max='10' defaultValue='0'/>
            </div>
            <button type="submit">+ ADD</button>
        </form>
        </>
    )
}