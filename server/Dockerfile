FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY . .

# Copy entrypoint.sh ก่อน แล้วแปลง + ให้สิทธิ์
COPY entrypoint.sh ./entrypoint.sh
RUN apt-get update && apt-get install -y dos2unix
RUN dos2unix entrypoint.sh
RUN chmod +x entrypoint.sh

RUN npx prisma generate
RUN npm run build

EXPOSE 4000

ENTRYPOINT ["sh", "./entrypoint.sh"]
