cp-env = cp .env.example .env

#-----------------------------------------------------------
# Docker
#-----------------------------------------------------------
build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d
build-up:
	docker-compose up -d --build
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
down-all:
	docker-compose down --rmi all --volumes --remove-orphans
web:
	docker-compose exec web ash
app:
	docker-compose exec app bash
db:
	docker-compose exec db bash
ps:
	docker-compose ps

#-----------------------------------------------------------
# Laravel
#-----------------------------------------------------------
install-laravel:
	$(cp-env)
	mkdir -p src
	@make build-up
	docker-compose exec app composer create-project --prefer-dist laravel/laravel . "6.*"
	@make key-gene
	@make storage-link
	@make chmod-storage-cache
	@make fresh
init-laravel:
	$(cp-env)
	@make build-up
	@make composer-install
	docker-compose exec app $(cp-env)
	@make key-gene
	@make storage-link
	@make chmod-storage-cache
	@make fresh
key-gene:
	docker-compose exec app php artisan key:generate
storage-link:
	docker-compose exec app php artisan storage:link
chmod-storage-cache:
	docker-compose exec app chmod -R 777 storage bootstrap/cache
migrate:
	docker-compose exec app php artisan migrate
fresh:
	docker-compose exec app php artisan migrate:fresh --seed
seed:
	docker-compose exec app php artisan db:seed
tinker:
	docker-compose exec app php artisan tinker
test:
	docker-compose exec app php artisan test
composer-install:
	docker-compose exec app composer install
