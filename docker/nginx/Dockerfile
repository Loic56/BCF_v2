FROM nginx:1.9.7

ENV hoststaticdir=static

COPY nginx.conf /etc/nginx/nginx.conf

COPY dev.silver-pulse.com.crt /etc/nginx/dev.silver-pulse.com.crt

COPY dev.silver-pulse.com.key /etc/nginx/dev.silver-pulse.com.key

COPY ${hoststaticdir} /usr/share/nginx/