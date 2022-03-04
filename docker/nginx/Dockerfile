FROM nginx:1.20-alpine
LABEL maintainer="tszk151"

# copy nginx config file
COPY ./docker/nginx/*.conf /etc/nginx/conf.d/

# set work directory
WORKDIR /var/www/src
