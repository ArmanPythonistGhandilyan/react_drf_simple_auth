FROM node:16

WORKDIR /frontend

COPY . .

RUN npm install --legacy-peer-deps
    # npm run build

CMD ["npm", "run", "dev"]