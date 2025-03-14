-- DropForeignKey
ALTER TABLE "Positive_post" DROP CONSTRAINT "Positive_post_userId_fkey";

-- AlterTable
ALTER TABLE "Positive_post" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Positive_post" ADD CONSTRAINT "Positive_post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
