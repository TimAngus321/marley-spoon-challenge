import axios from "axios";
import { useState, useEffect } from "react";

const useRecipes = async () => {
  const [recipes, setRecipes] = useState<any>(null);

  const spaceId = process.env.REACT_APP_SPACE_ID;
  const envId = process.env.REACT_APP_ENV_ID;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const contentTypeId = "recipe";

  console.log(spaceId, accessToken, contentTypeId, envId)

  async function fetchRecipeEntries() {
    // Look into New URL
    const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${envId}/entries?content_type=${contentTypeId}&access_token=${accessToken}`;

    try {
      const response = await axios.get(apiUrl);
      const recipeEntries = response.data.items;
      setRecipes(recipeEntries)
    //   return recipeEntries;
    } catch (error) {
      console.error("Error fetching recipe entries:", error);
      return [];
    }
  }

  useEffect(() => {
    if (!recipes) {
   fetchRecipeEntries();
    }
  }, [!recipes]);

  return {
    recipes,
  };
};

export default useRecipes;
