# ใช้ Node.js 22 เป็น base image
FROM node:22

# กำหนด working directory
WORKDIR /usr/src/app

# Copy package.json และ package-lock.json เพื่อลด layer build
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install


# Copy โฟลเดอร์ prisma รวมถึง schema.prisma ไปยัง container
COPY prisma ./prisma


# รัน Prisma generate เพื่อสร้าง Prisma Client สำหรับสภาพแวดล้อมที่กำหนดใน schema.prisma
RUN npx prisma generate

# Copy โค้ดทั้งหมดเข้า container
COPY . .

RUN npm run build

# เปิด port 4000
EXPOSE 4000


# สั่งให้ container รันแอป
CMD ["node", "dist/src/index.js"]
