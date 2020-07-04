FROM node:12.16.1-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod


FROM nginx:1.15.8-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/default.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/artur-design-project/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]