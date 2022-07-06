from django.contrib import admin

from recipe_api.models import Recipe, Profile

# Register your models here.
admin.site.register(Profile)
admin.site.register(Recipe)