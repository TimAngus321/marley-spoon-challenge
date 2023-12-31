import RecipeReviewCard from "./components/receipeDescCard";
import styles from "./style/recipeDescPage.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useRecipeList from "../RecipeHomePage/hooks/useRecipeList";
import useRecipeDetails from "./hooks/useRecipeDetails";

const RecipeDesc = () => {
  const { navigate } = useRecipeList();
  const {clickedRecipeData} = useRecipeDetails();
  
  return (
    <main className={styles?.recipeDescContainer}>
      <div className={styles?.backArrowBtn}>
      <ArrowBackIcon sx={{ fontSize: "4em" }} onClick={() => navigate("/")} />
      </div>
      <header>
        <h1>{clickedRecipeData?.title}</h1>
      </header>
      <RecipeReviewCard />
    </main>
  );
};

export default RecipeDesc;
