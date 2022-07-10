export interface Recipe {
            recipe_name:string, 
            dish_type:string,
            prep_time_mins:number,
            no_of_servings:number,
            cooking_time_mins:number,
            image:any,
            ingredients:string,
            instructions:string,
            date_created:Date,
            posted_by:string,
            ratings:number,
            country:string,
            bookmarked:boolean
}
