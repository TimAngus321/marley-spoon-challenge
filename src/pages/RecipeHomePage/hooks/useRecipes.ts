import { useState, useEffect } from "react";
import { recipeObj } from "../types/recipes";
import axios from "axios";

const useRecipes = () => {
//   const [recipes, setRecipes] = useState<any>();
  const [recipesObj, setRecipesObj] = useState<recipeObj>();

  const spaceId = process.env.REACT_APP_SPACE_ID;
  const envId = process.env.REACT_APP_ENV_ID;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const contentTypeId: string = "recipe";
  const apiUrl: string = `https://cdn.contentful.com/spaces/${spaceId}/environments/${envId}/entries?content_type=${contentTypeId}&access_token=${accessToken}`;

  const FetchAllRecipeData = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching recipe entries:", error);
      return [];
    }
  };

  //  Make sure home page has all recepies from api call
  useEffect(() => {
    const getRecipes = async () => {
      if (!recipesObj) {
        try {
          const recipeEntries = await FetchAllRecipeData();
        //   await setRecipes(recipeEntries);
          await createRecipeDataObj(recipeEntries);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getRecipes();
  }, [recipesObj]);

  const createRecipeDataObj = async (recipeEntries: any) => {
    let allRecipeObjData: any = {};
    // if (recipes) {
      allRecipeObjData = recipeEntries.items.map((item: any) => {
        const chefId = item.fields.chef?.sys.id;
        const chef = recipeEntries.includes.Entry.find(
          (entry: any) => entry.sys.id === chefId
        );
        const chefName = chef?.fields.name;

        const tags = item.fields.tags?.map((tag: any) => {
          const tagId = tag.sys.id;
          const recipeTag = recipeEntries.includes.Entry.find(
            (entry: any) => entry.sys.id === tagId
          );
          return recipeTag?.fields.name;
        });

        return {
          title: item.fields.title,
          imageUrl: recipeEntries.includes.Asset.find(
            (asset: any) => asset.sys.id === item.fields.photo?.sys.id
          )?.fields.file.url,
          tags,
          description: item.fields.description,
          chefName,
        };
      });
    // }
    setRecipesObj(allRecipeObjData);
  }


  return {
    // recipes,
    recipesObj,
  };
};

export default useRecipes;
