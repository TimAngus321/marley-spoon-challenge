import RecipeListGrid from "./components/RecipeListGrid";
import styles from "./style/recipeHomePage.module.scss";
import useRecipes from "./hooks/useRecipes";

const RecipeHome = () => {
  const {
    // recipes, 
    recipesObj} = useRecipes();

  console.log(recipesObj);
  

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
