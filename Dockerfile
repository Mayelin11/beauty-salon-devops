FROM node:18

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend .

WORKDIR /app
COPY frontend ./frontend
COPY index.html .
COPY style.css .
COPY script.js .

EXPOSE 3000

CMD ["node", "backend/app.js"]

