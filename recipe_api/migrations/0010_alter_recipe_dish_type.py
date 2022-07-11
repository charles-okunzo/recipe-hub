# Generated by Django 4.0.6 on 2022-07-11 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0009_remove_recipe_bookmarked_alter_recipe_dish_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Appetizer', 'Appetizer'), ('Dessert', 'Dessert'), ('Drink', 'Drink'), ('Side Dish', 'Side Dish'), ('Main Dish', 'Main Dish'), ('Soup', 'Soup'), ('Salad', 'Salad')], max_length=100),
        ),
    ]
