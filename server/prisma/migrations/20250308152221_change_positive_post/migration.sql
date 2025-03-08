/*
  Warnings:

  - You are about to drop the column `name` on the `positive_post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `positive_post` table. All the data in the column will be lost.
  - Added the required column `date` to the `positive_post` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `positive_post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "positive_post" DROP COLUMN "name",
DROP COLUMN "title",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "content" SET NOT NULL;
