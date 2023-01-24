FROM node:14-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g node-gyp

COPY ./ ./

#EXPOSE 1876

CMD ["npm", "start"]
#ENTRYPOINT [ "executable" ]
