from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

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
    ratings = models.PositiveIntegerField(null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    bookmarked = models.BooleanField(default=False)


    def __str__(self):
        return self.recipe_name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    profile_img = CloudinaryField('profile_imgs', default = 'https://res.cloudinary.com/dvhid4k2j/image/upload/v1654654901/png_rxb8cy.jpg')
    bio = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    mobile_no = models.PositiveIntegerField(null=True, blank=True)



    @receiver(post_save, sender = User)
    def create_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)
        instance.profile.save()

    def __str__(self):
        return f'{self.user.username}\'s Profile'