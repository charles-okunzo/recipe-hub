export class Recipe {
    id! : number;
    recipe_name!: string;
    dish_type!: string;
    prep_time_mins!:string;
    no_of_servings!:string;
    cooking_time_mins!:string;
    ingredients!:string;
    instructions!: string;
    date_created!: Date;
    posted_by!: string;
    ratings!: number;
    country!: string;
    bookmarked!: boolean;
}
