# Generated by Django 4.0.6 on 2022-07-12 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_api', '0017_recipe_description_alter_profile_profile_img_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Dessert', 'Dessert'), ('Salad', 'Salad'), ('Drink', 'Drink'), ('Soup', 'Soup'), ('Side Dish', 'Side Dish'), ('Appetizer', 'Appetizer'), ('Main Dish', 'Main Dish')], max_length=100),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='posted_by',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
