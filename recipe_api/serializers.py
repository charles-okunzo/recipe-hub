from rest_framework import serializers
from recipe_api.models import Profile, Recipe
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'url',
        )
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

        def create(self, validated_data):
            user = User(
                username = validated_data['username'],
                first_name = validated_data['first_name'],
                last_name = validated_data['last_name'],
                email = validated_data['email']
            )
            user.set_password(validated_data['password'])
            user.save()
            return user

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    posted_by = UserSerializer()
    class Meta:
        model = Recipe
        fields = (
            'id',
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
            'url',
        )


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = (
            'id',
            'user',
            'profile_img',
            'bio',
            'city',
            'country',
            'mobile_no',
            'url',
        )