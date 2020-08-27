FROM node:latest
LABEL Guilherme dos Santos
ENV PORT=3000
COPY . /var/www
WORKDIR /var/www
RUN yarn
ENTRYPOINT yarn build
EXPOSE "8080:3000"