import { Route, Routes } from "react-router-dom";
import RecipeDesc from "../pages/RecipeDescriptionPage/recipeDesc";
import RecipeHome from "../pages/RecipeHomePage/recipeHome";

const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<RecipeHome />} />
      <Route index element={<RecipeDesc />} />
    </Routes>
  );
};

export default PageRoutes;
