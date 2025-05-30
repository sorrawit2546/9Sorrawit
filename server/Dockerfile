# # ใช้ Node.js 22 เป็น base image
# FROM node:22

# # กำหนด working directory
# WORKDIR /usr/src/app

# # Copy package.json และ package-lock.json เพื่อลด layer build
# COPY package*.json ./

# # ติดตั้ง dependencies
# RUN npm install

# # Copy โฟลเดอร์ prisma รวมถึง schema.prisma ไปยัง container
# COPY prisma ./prisma

# # Copy โค้ดทั้งหมดเข้า container
# COPY . .

# # สร้าง Prisma Client
# RUN npx prisma generate

# # Build TypeScript เป็น JavaScript
# RUN npm run build

# # Copy entrypoint.sh และให้ permission รัน
# COPY entrypoint.sh ./
# RUN chmod +x ./entrypoint.sh

# # เปิด port 4000
# EXPOSE 4000

# # รัน entrypoint.sh แทนการเรียก node โดยตรง
# CMD ["./entrypoint.sh"]
# ใช้ Node.js 22 เป็น base image
FROM node:22

# กำหนด working directory
WORKDIR /usr/src/app

# Copy package.json และ package-lock.json เพื่อลด layer build
# ขั้นตอนนี้ยังคงเดิม เพื่อใช้ประโยชน์จาก Docker cache
COPY package*.json ./

# ติดตั้ง dependencies ทั้งหมด (รวมถึง devDependencies)
# สำหรับ dev เราต้องการ devDependencies เช่น nodemon, ts-node
RUN npm install

# Copy โฟลเดอร์ prisma เพื่อให้สามารถ generate client ได้
COPY prisma ./prisma

# สร้าง Prisma Client
# ขั้นตอนนี้จำเป็นต้องทำหลังจาก npm install
RUN npx prisma generate

# Copy โค้ดที่เหลือเข้ามา (จะถูก override ด้วย volume ตอนรัน)
COPY . .

# เปิด port 4000
EXPOSE 4000

# ไม่มีการ build (RUN npm run build) และไม่ใช้ entrypoint.sh ใน dev
# เราจะใช้ nodemon เพื่อรัน TypeScript โดยตรงและ auto-reload เมื่อโค้ดเปลี่ยน
# คำสั่งนี้จะทำงานก็ต่อเมื่อไม่ได้กำหนด command ใน docker-compose.yml
CMD ["npm", "run", "dev"]