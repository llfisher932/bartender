/*
  Warnings:

  - You are about to alter the column `price` on the `drink` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('QUEUED', 'SERVED');

-- AlterTable
ALTER TABLE "drink" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "drinkId" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'QUEUED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "drink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
