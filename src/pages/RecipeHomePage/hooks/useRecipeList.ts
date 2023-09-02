import { useNavigate } from "react-router-dom";
import { recipeInfoObj } from "../types/recipesTypes";

const useRecipeList = () => {

const navigate = useNavigate();

const navWithState = (recipeObj: recipeInfoObj) => {
    navigate("/recipeDesc", {state: recipeObj})
}

const responsiveColumns = () => {
    if (window.innerWidth > 600) {
      return 1;
    } else {
      return 2;
    }
  }

  return {
    responsiveColumns,
    navigate,
    navWithState
  }

};

export default useRecipeList;