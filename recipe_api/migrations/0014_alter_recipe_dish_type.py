# Generated by Django 4.0.6 on 2022-07-11 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0013_rename_ratings_rating_rating_remove_recipe_ratings_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Appetizer', 'Appetizer'), ('Side Dish', 'Side Dish'), ('Dessert', 'Dessert'), ('Drink', 'Drink'), ('Main Dish', 'Main Dish'), ('Salad', 'Salad'), ('Soup', 'Soup')], max_length=100),
        ),
    ]