# Generated by Django 4.0.6 on 2022-07-11 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0015_alter_recipe_dish_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='bookmarked',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Appetizer', 'Appetizer'), ('Drink', 'Drink'), ('Salad', 'Salad'), ('Soup', 'Soup'), ('Main Dish', 'Main Dish'), ('Side Dish', 'Side Dish'), ('Dessert', 'Dessert')], max_length=100),
        ),
    ]
