-- CreateTable
CREATE TABLE "positive_post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "email" TEXT,

    CONSTRAINT "positive_post_pkey" PRIMARY KEY ("id")
);
