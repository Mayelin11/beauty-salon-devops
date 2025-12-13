
# Beauty Salon Web App

Proyecto web de un salón de belleza desarrollado con HTML, CSS y JavaScript,
contenedorizado con Docker y usando Node.js + Express para servir la aplicación.

## Tecnologías usadas
- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- Docker

## Estructura del proyecto

Beauty Salon/
│── backend/
│── frontend/
│   └── img/
│── index.html
│── style.css
│── script.js
│── Dockerfile

## Cómo ejecutar el proyecto

1. Construir la imagen:
docker build -t beauty-salon-app .
2. Ejecutar el contenedor:
docker run -p 3000:3000 beauty-salon-app
3. Abrir en el navegador:
http://localhost:3000


