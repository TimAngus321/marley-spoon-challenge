import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useRecipeList from "../hooks/useRecipeList";
import useRecipes from "../hooks/useRecipes";
import styles from "../style/recipeGridStyle.module.scss";

const RecipeListGrid = () => {
  const { recipesObj } = useRecipes();
  const { responsiveColumns, navWithState } = useRecipeList();

  return (
    <ImageList sx={{ width: "75%", height: "100vh" }}>
      {recipesObj &&
        Object.values(recipesObj).map((recipe, i) => (
          <ImageListItem
            className={styles?.recipeLi}
            key={i}
            cols={responsiveColumns()}
            onClick={() => {navWithState({
              title: recipe?.title,
              imageUrl: recipe?.imageUrl,
              tags: recipe?.tags,
              description: recipe?.description,
              chefName: recipe?.chefName,
            })}}
          >
            <img
              src={`https:${recipe?.imageUrl}`}
              srcSet={`https:${recipe?.imageUrl}`}
              alt={recipe?.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={recipe?.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${recipe?.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};

export default RecipeListGrid;
