from rest_framework import serializers
from recipe_api.models import Profile, Recipe
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'url'
        )
        extra_kwargs = {'password': {'write_only': True}}

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    posted_by = UserSerializer()
    
    class Meta:
        model = Recipe
        fields = (
            'recipe_name',
            'dish_type',
            'prep_time_mins',
            'no_of_servings',
            'cooking_time_mins',
            'image',
            'ingredients',
            'instructions',
            'date_created',
            'posted_by',
            'ratings',
            'country',
            'bookmarked',
            'url'
        )


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = (
            'user',
            'profile_img',
            'bio',
            'city',
            'country',
            'mobile_no',
            'url'
        )