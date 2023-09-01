import RecipeListGrid from "./components/RecipeListGrid";
import styles from "./style/recipeHomePage.module.scss";
import useRecipes from "./hooks/useRecipes";

const RecipeHome = () => {
  const { recipesObj } = useRecipes();

  // console.log(recipesObj);


  return (
    <main className={styles?.recipeHomeContainer}>
      <header>
        <h1>Marley Spoon Recipes</h1>
      </header>
      {/* {recipesObj ?
      Object.values(recipesObj).map((recipe, i) => (
      <RecipeListGrid 
        key={i}
        title={recipe?.title}
        image={recipe?.imageUrl} 
        tags={recipe?.tags} 
        desc={recipe?.description}
        chefName={recipe?.chefName}
       />
       ))
       : null} */}
       <RecipeListGrid props={recipesObj} />
    </main>
  );
};

export default RecipeHome;
