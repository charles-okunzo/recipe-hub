from django.contrib import admin

from recipe_api.models import Bookmark, Rating, Recipe, Profile

# Register your models here.
admin.site.register(Profile)
admin.site.register(Recipe)
admin.site.register(Bookmark)
admin.site.register(Rating)