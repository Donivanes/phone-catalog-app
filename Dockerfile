FROM node:latest

WORKDIR /app
ADD client client
ADD server server

RUN cd client && yarn install
RUN cd server && yarn install
RUN yarn global add concurrently

EXPOSE 1234 3000

CMD ["concurrently", "'cd client && yarn run dev'", "'cd server && yarn run start'"]