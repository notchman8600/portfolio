FROM node:12

ENV APP_ROOT /app/
WORKDIR $APP_ROOT
ARG NODE_ENV="development"
COPY package*.json $APP_ROOT

#RUN apt-get update && \
#    apt-get upgrade -y && \
#    yarn global add @vue/cli && \
#    yarn global add @vue/cli-init && \
#    yarn add firebase --save

RUN yarn install

COPY . $APP_ROOT

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
