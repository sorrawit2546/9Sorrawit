/*
  Warnings:

  - You are about to drop the `positive_post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "positive_post";

-- CreateTable
CREATE TABLE "Positive_post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "email" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Positive_post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Positive_post" ADD CONSTRAINT "Positive_post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
