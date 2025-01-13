FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

# ติดตั้ง dependencies และ TypeScript แบบ global
RUN npm install
RUN npm install -g typescript

COPY . .

# สร้าง build ด้วยคำสั่ง tsc (global)
RUN tsc

EXPOSE 4000

CMD ["npm", "start"]
