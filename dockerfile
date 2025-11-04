FROM node:16-alpine  # Lightweight base image
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
EXPOSE 1000
CMD ["node", "src/app.js"]
