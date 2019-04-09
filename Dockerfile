FROM node:10.12.0 as builder

WORKDIR /app

COPY package.json .
RUN npm install
COPY src/ src/
COPY views/ views/

################################################
FROM node:10.12.0

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 80
CMD [ "node", "src/index.js" ]
