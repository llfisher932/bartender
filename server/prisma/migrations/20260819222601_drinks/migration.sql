/*
  Warnings:

  - Added the required column `name` to the `drink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `drink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "drink" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
