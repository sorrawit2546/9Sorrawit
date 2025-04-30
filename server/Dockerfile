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

# Copy โค้ดทั้งหมดเข้า container
COPY . .

# สร้าง Prisma Client
RUN npx prisma generate

# Build TypeScript เป็น JavaScript
RUN npm run build

# Copy entrypoint.sh และให้ permission รัน
COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

# เปิด port 4000
EXPOSE 4000

# รัน entrypoint.sh แทนการเรียก node โดยตรง
CMD ["./entrypoint.sh"]
