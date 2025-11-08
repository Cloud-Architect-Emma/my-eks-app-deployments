FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001  # Replace X with the correct port
CMD ["node", "index.js"]
