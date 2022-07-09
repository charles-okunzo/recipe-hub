# Generated by Django 4.0.5 on 2022-07-04 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0002_alter_recipe_country_alter_recipe_dish_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Soup', 'Soup'), ('Salad', 'Salad'), ('Drink', 'Drink'), ('Dessert', 'Dessert'), ('Appetizer', 'Appetizer'), ('Side Dish', 'Side Dish'), ('Main Dish', 'Main Dish')], max_length=100),
        ),
    ]
