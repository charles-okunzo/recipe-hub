run:
	python3 manage.py runserver 9000


shell:
	pipenv shell

migrate:
	python3 manage.py makemigrations && python3 manage.py migrate

super:
	python3 manage.py createsuperuser

heroku-migrate:
	heroku run python manage.py migrate

test:
	python3 manage.py test