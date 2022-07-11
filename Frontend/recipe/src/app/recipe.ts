export class Recipe {
    public recipe_name: string;
    public dish_type: string;
    public prep_time_mins:number;
    public no_of_servings:number;
    public cooking_time_mins:number;
    public ingredients:string;
    public instructions: string;
    public posted_by: string;
    public ratings: number;
    public country: string;
    public bookmarked: boolean;

    constructor(recipe_name:string,dish_type: string, prep_time_mins:number,no_of_servings:number,cooking_time_mins:number,ingredients:string,instructions: string,posted_by: string,ratings: number,country: string,bookmarked: boolean
        ){
        this.recipe_name = recipe_name;
        this.dish_type = dish_type;
        this.prep_time_mins = prep_time_mins;
        this.no_of_servings = no_of_servings;
        this.cooking_time_mins = cooking_time_mins;
        this.ingredients = ingredients;
        this.instructions = instructions;
        // this.date_created = date_created;
        this.posted_by = posted_by;
        this.ratings = ratings;
        this.country = country;
        this.bookmarked = bookmarked;
    }
}
