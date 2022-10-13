# образ за основу, node:18
FROM node:18 as build-stage

LABEL maintainer="pyatakov_ns@it-thematic.ru"
LABEL vendor="zarbo"

# параметр для выбора сборки
ARG BUILD_MODE

# создание директории приложения
WORKDIR /usr/src/app

# символ астериск ("*") используется для того чтобы по возможности 
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

# установка зависимостей
RUN npm install

# копируем исходный код
COPY . .

# сборка клиента dist
RUN npm run docs:build

# второй этап создания образа
FROM nginx:1.18 as production-stage

# копирование dist-itt 
COPY --from=build-stage /usr/src/app/docs/.vuepress/dist /usr/share/nginx/html

# открытие 80го порта в контейнере
EXPOSE 80

# запуск nginx
CMD ["nginx", "-g", "daemon off;"]
