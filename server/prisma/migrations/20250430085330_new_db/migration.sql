/*
  Warnings:

  - You are about to drop the `Positive_post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Positive_post" DROP CONSTRAINT "Positive_post_userId_fkey";

-- DropTable
DROP TABLE "Positive_post";

-- CreateTable
CREATE TABLE "positive_post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT[],
    "email" TEXT,
    "userId" INTEGER,

    CONSTRAINT "positive_post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "positive_post" ADD CONSTRAINT "positive_post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
