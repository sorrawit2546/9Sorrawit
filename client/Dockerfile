FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

<<<<<<< HEAD
# --- เพิ่มบรรทัดเหล่านี้เพื่อทดสอบ Network ชั่วคราว ---
# (ใช้ apt-get เพราะ Node image ส่วนใหญ่เป็น Debian base)
#RUN apt-get update && apt-get install -y curl && echo ">>> กำลังทดสอบ Network..." && curl -v https://fonts.googleapis.com && echo ">>> ทดสอบ Network เสร็จสิ้น."
# --------------------------------------------------

# *** เพิ่ม: สั่ง Build Production App ***
# (คำสั่งนี้จะสร้างโฟลเดอร์ .next ที่จำเป็นสำหรับ next start)
=======
# # *** เพิ่ม: สั่ง Build Production App ***
# # (คำสั่งนี้จะสร้างโฟลเดอร์ .next ที่จำเป็นสำหรับ next start)
# RUN npm run build
>>>>>>> 2a7c1d6003ce07cc6627f733fe72f2ad9d58b39d

EXPOSE 3000

CMD ["npm", "run" , "dev"]
