import { useLocation } from "react-router-dom";

const useRecipeDetails = () => {
    const location = useLocation();
    const clickedRecipeData = location.state;

    return {
        clickedRecipeData,
    }

}

export default useRecipeDetails;