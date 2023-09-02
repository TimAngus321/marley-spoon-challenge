import RecipeListGrid from "./components/RecipeListGrid";
import styles from "./style/recipeHomePage.module.scss";

const RecipeHome = () => {
  

  return (
    <main className={styles?.recipeHomeContainer}>
      <header>
        <h1>Marley Spoon Recipes</h1>
      </header>
       <RecipeListGrid />
    </main>
  );
};

export default RecipeHome;
