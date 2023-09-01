import { useNavigate } from "react-router-dom";

const useRecipeList = () => {

const navigate = useNavigate();

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
  }

};

export default useRecipeList;