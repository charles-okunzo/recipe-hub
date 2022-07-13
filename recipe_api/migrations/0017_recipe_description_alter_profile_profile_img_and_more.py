# Generated by Django 4.0.6 on 2022-07-12 11:34

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0016_alter_bookmark_bookmarked_alter_recipe_dish_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='profile_img',
            field=cloudinary.models.CloudinaryField(default='v1657613809/avatar_zzuoot.png', max_length=255, verbose_name='profile_imgs'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Main Dish', 'Main Dish'), ('Salad', 'Salad'), ('Appetizer', 'Appetizer'), ('Dessert', 'Dessert'), ('Drink', 'Drink'), ('Side Dish', 'Side Dish'), ('Soup', 'Soup')], max_length=100),
        ),
    ]