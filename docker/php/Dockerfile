FROM php:7.4-fpm-bullseye
LABEL maintainer="tszk151"

# set composer env
ENV COMPOSER_ALLOW_SUPERUSER=1 \
    COMPOSER_HOME=/composer

# composer install
COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

# apt-get update & package install
RUN apt-get update && \
    apt-get -y install git libicu-dev libonig-dev libzip-dev unzip && \
    apt-get clean && \
    rm -rf /var/lin/apt/lists/* && \
    docker-php-ext-install bcmath intl pdo_mysql zip && \
    composer config -g repo.packagist composer https://repo.packagist.org

# copy php.ini
COPY ./docker/php/php.ini /ucr/local/etc/php/php.ini
# copy zzz-www.conf
COPY ./docker/php/php-fpm.d/zzz-www.conf /usr/local/etc/php-fpm.d/zzz-www.conf

# set work directory
WORKDIR /var/www/src
