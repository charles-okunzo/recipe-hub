# Generated by Django 4.0.6 on 2022-07-05 16:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipe_api', '0005_alter_profile_mobile_no_alter_recipe_dish_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='dish_type',
            field=models.CharField(choices=[('Dessert', 'Dessert'), ('Side Dish', 'Side Dish'), ('Main Dish', 'Main Dish'), ('Soup', 'Soup'), ('Appetizer', 'Appetizer'), ('Drink', 'Drink'), ('Salad', 'Salad')], max_length=100),
        ),
    ]
