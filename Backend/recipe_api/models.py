from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User

# Create your models here.
DISH_TYPE_CHOICES = {
    ('Main Dish', 'Main Dish'),
    ('Side Dish', 'Side Dish'),
    ('Appetizer', 'Appetizer'),
    ('Soup', 'Soup'),
    ('Salad', 'Salad'),
    ('Dessert', 'Dessert'),
    ('Drink', 'Drink')
}

class Recipe(models.Model):
    recipe_name = models.CharField(max_length=100)
    dish_type = models.CharField(max_length=100, choices=DISH_TYPE_CHOICES)
    prep_time_mins = models.PositiveIntegerField()
    no_of_servings = models.PositiveIntegerField()
    cooking_time_mins = models.PositiveIntegerField()
    image = CloudinaryField('recipe_images')
    ingredients = models.TextField()
    instructions = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipe_owner')
    ratings = models.PositiveIntegerField()
    country = models.CharField(max_length=100)
    bookmarked = models.BooleanField(default=False)