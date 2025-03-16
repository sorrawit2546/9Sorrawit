/*
  Warnings:

  - The `image` column on the `Positive_post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Positive_post" DROP COLUMN "image",
ADD COLUMN     "image" TEXT[];
