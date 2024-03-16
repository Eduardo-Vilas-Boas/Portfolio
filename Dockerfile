FROM node:20.11.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "8000"]
