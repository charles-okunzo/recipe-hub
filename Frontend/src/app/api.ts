export interface Recipe {
    id: number;
    description: string;
    recipe_name: string;
    dish_type: string;
    prep_time_mins: number;
    no_of_servings: number;
    cooking_time_mins: number;
    image: string;
    ingredients: string;
    instructions: string;
    date_created: Date;
    posted_by: number;
    ratings: number;
    country: string;
    bookmarked: boolean;
  }