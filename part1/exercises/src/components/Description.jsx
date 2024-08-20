import React from "react";
import styles from "./Description.module.css";

const RecipeAuthor = () => {
    let authorLink = "https://www.thepioneerwoman.com/food-cooking/recipes/a9697/chicken-salad-the-way-i-like-it/";
    let authorPhoto = "https://nypost.com/wp-content/uploads/sites/2/2020/11/ree-drummond-1.jpg?resize=1536,1024&quality=75&strip=all";
    let authorName = "Ree Drummond";


    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} style={{ borderRadius: '50%',  height: '400px', marginRight: 'auto' }}
 />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Pioneer Women</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Chicken Salad Sandwhich</h1>
                    <p>Enjoy a delicious chicken salad sandwhich that includes hints of grapes, peanuts and green onion</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;
