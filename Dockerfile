FROM node:alpine3.17 AS builder

WORKDIR /app
COPY package.json .

RUN npm install --silent

COPY . .

RUN npm run build

FROM nginx

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
