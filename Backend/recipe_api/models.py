from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User

# Create your models here.


class Recipe(models.Model):
    recipe_name = models.CharField(max_length=100)
    dish_type = models.CharField(max_length=100)
    prep_time_mins = models.PositiveIntegerField(max_length=5)
    no_of_servings = models.PositiveIntegerField(max_length=5)
    cooking_time_mins = models.PositiveIntegerField(max_length=5)
    image = CloudinaryField(upload_to = 'recipe_images')
    ingredients = models.TextField()
    instructions = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipe_owner')
    ratings = models.PositiveIntegerField(max_length=1)
    country = models.CharField(max_length=100)
    bookmarked = models.BooleanField(default=False)