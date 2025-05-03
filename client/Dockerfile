FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# --- เพิ่มบรรทัดนี้เพื่อทดสอบ Network ชั่วคราว ---
# (สันนิษฐานว่า Node image เป็น Debian base)
RUN apt-get update && apt-get install -y curl && echo "Attempting curl..." && curl -v https://fonts.googleapis.com && echo "Curl finished."
# ----------------------------------------------

# *** เพิ่ม: สั่ง Build Production App ***
# (คำสั่งนี้จะสร้างโฟลเดอร์ .next ที่จำเป็นสำหรับ next start)
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
