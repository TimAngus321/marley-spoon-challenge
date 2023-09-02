export interface recipeInfoObj {
    title: string;
    imageUrl: string;
    tags?: Array<string>;
    description: string;
    chefName?: string;
}

export interface RecipeData {
    recipeData?: recipeInfoObj[];
  }