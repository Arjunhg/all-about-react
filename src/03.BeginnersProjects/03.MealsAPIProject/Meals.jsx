import axios from "axios";
import { useEffect, useState } from "react";
import "./Meals.css";

const Meals = () => {

    const [meals, setMeals] = useState([]);

    // useEffect(() => {
    //     axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    //         .then((res) => {
    //             setMeals(res.data.meals)
    //         })
    //         .catch((err) => {
    //             prompt(err);
    //         })
    // }, []);
    useEffect(() => {
        async function getItem(){
            try {
                const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
                setMeals(res.data.meals);
            } catch (error) {
                console.log(error);
            }
        }
        getItem();
    },[])

    const itemList = meals.map(({strMeal, strMealThumb, idMeal}) => {
        return(
            <section className="card">
                <img src={strMealThumb} width={100} height={100}/>
                <section className="content">
                    <p>{strMeal}</p>
                    <p>Meal ID: {idMeal}</p>
                </section>
            </section>
        )
    })

    return <div className="items-container">{itemList}</div>
}

export default Meals;