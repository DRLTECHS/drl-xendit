# Dockerfile (Backend)
FROM node:14

WORKDIR /app

COPY backend/package.json ./backend/package.json
RUN npm install --prefix ./backend

COPY backend/ ./backend

EXPOSE 3000
CMD ["npm", "start", "--prefix", "./backend"]
