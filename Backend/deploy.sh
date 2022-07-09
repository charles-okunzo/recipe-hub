# python manage.py makemigrations
# python manage.py migrate

# heroku config:set API_KEY=2187sdfsdf627981sds19646
# heroku config:set API_SECRET=sdfsdfs-l8xmD_9eUcYBj_tVN8
# heroku config:set CLOUDINARY_URL=cloudinary://sdfsdfsdfsdf:Jvd7sdfsd0gLuHk@da7srpwm6
# heroku config:set CLOUD_NAME=sdsdsdfsdf

# heroku config:set DEBUG=False
# heroku config:set DISABLE_COLLECTSTATIC=1
# heroku config:set MODE=prod
# heroku config:set SECRET_KEY='django-insecure-h-4_vq % @6x462t8ly = k = +8os_54n7_lziad!i4 *$_rey9b@1mb'
heroku config:set ALLOWED_HOSTS=angular-django.herokuapp.com


# git switch -c main
# git switch main
# git merge develop

python manage.py collectstatic

pip freeze > requirements.txt

git add .
git commit -m "heroku deployment"
git push heroku main

# pipenv install gunicorn
# pipenv install whitenoise
# pipenv install django-heroku


heroku git:remote -a rec1pe-api
heroku buildpacks:set heroku/python


# heroku run python manage.py makemigrations
# heroku run python manage.py migrate
# heroku pg:reset
# heroku pg:push demo11 DATABASE_URL --app angular-django

git switch develop
heroku open