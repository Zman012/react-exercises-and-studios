import styles from './Ingredients.module.css';

const RecipeIngredients = () => {

    let ingredients = ["1 whole, cut up fryer chicken", "2 to 3 stalks celery, chopped","2 to 3 cups grapes, halved", "3 green onions, chopped", "1/2 c. mayonnaise", "1/2 c. plain yogurt or sour cream", "Juice of 1 lemon", "1 to 2 tablespoons brown sugar", "Kosher salt, to taste, Ground black pepper", "Small handful fresh dill, minced", "Chopped almonds for crunch"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
                <li>{ingredients[6]}</li>
                <li>{ingredients[7]}</li>
                <li>{ingredients[8]}</li>
                <li>{ingredients[9]}</li>
                <li>{ingredients[10]}</li>


            </ul>
        </div>
    );
}

export default RecipeIngredients;