FROM node:16-alpine as builder

COPY ./expo /build
WORKDIR /build

RUN yarn install && \
    yarn global add expo-cli && \
    expo build:web


FROM nginx

COPY ./deploy /app/deploy
WORKDIR /app

COPY --from=builder /build/web-build /app/dist
ENTRYPOINT [ "sh", "/app/deploy/entrypoint.sh" ]