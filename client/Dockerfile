FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# # *** เพิ่ม: สั่ง Build Production App ***
# # (คำสั่งนี้จะสร้างโฟลเดอร์ .next ที่จำเป็นสำหรับ next start)
# RUN npm run build

EXPOSE 3000

CMD ["npm", "run" , "dev"]
