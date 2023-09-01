import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { recipeObj } from '../types/recipes';
import useRecipeList from "../hooks/useRecipeList"

 const RecipeListGrid = (props: any) => {

 const recipeObj: recipeObj  = props?.props;

  const {responsiveColumns, navigate} = useRecipeList();

  return (
    <ImageList sx={{ width: "75%", height: "100vh" }} onClick={() => {navigate('/recipeDesc')}}>  
    {recipeObj && Object.values(recipeObj).map((recipe, i) => (
        <ImageListItem key={i} cols={responsiveColumns()}
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
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${recipe?.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        ))  }
    </ImageList>
  );
}

export default RecipeListGrid;

