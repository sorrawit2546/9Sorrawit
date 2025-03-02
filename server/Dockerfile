# ใช้ Node.js 22 เป็น base image
FROM node:22

# กำหนด working directory
WORKDIR /usr/src/app

# Copy package.json และ package-lock.json เพื่อลด layer build
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# Copy โค้ดทั้งหมดเข้า container
COPY . .

# Build TypeScript โดยไม่ต้องติดตั้ง global
RUN npx tsc

# เปิด port 4000
EXPOSE 4000

# สั่งให้ container รันแอป
CMD ["npm", "start"]
