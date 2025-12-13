FROM nginx:alpine

# Copia los archivos del frontend al servidor nginx
COPY imag /usr/share/nginx/html/imag
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]