# Generated by Django 4.0.6 on 2022-07-13 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0021_alter_recipe_dish_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Dessert', 'Dessert'), ('Salad', 'Salad'), ('Main Dish', 'Main Dish'), ('Soup', 'Soup'), ('Side Dish', 'Side Dish'), ('Drink', 'Drink'), ('Appetizer', 'Appetizer')], max_length=100),
        ),
    ]