import styles from './Description.module.css';

const RecipePhoto = () => {
    return <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-salad-1659383306.jpeg?crop=1xw:1xh;center,top&resize=980:*" alt="MouthWatering Chicken Salad Sandwhich" className = 
    {styles.imageUpdates} style={{ borderRadius: '50%',  height: '400px', padding:100}} />
    
};

export default RecipePhoto;