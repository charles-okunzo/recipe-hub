from rest_framework import serializers
from recipe_api.models import Profile, Recipe, Bookmark, Rating
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    profile = serializers.HyperlinkedRelatedField(view_name='profile-detail', read_only=True)
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
            'profile'
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

class RecipeSerializer(serializers.ModelSerializer):
    # posted_by = UserSerializer()
    bookmarked = serializers.HyperlinkedRelatedField(many=True, view_name='bookmarked-detail', read_only=True)
    rating = serializers.HyperlinkedRelatedField(many=True, view_name='rating-detail', read_only=True)
    class Meta:
        model = Recipe
        fields = (
            'id',
            'recipe_name',
            'description',
            'dish_type',
            'prep_time_mins',
            'no_of_servings',
            'cooking_time_mins',
            'image',
            'ingredients',
            'instructions',
            'date_created',
            'posted_by',
            'rating',
            'country',
            'bookmarked',
            'url',
        )


class ProfileSerializer(serializers.ModelSerializer):
    # user = UserSerializer()
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


class BookmarkSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    recipe = RecipeSerializer()
    class Meta:
        model = Bookmark
        fields = (
            'bookmarked',
            'user',
            'recipe'
        )


class RatingSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    recipe = RecipeSerializer()
    class Meta:
        model = Rating
        fields = (
            'rating',
            'user',
            'recipe'
        )