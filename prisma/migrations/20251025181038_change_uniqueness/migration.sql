/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `MyUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `MyVendor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `MyWorker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `MyWorker` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."MyUser_mobileNumber_key";

-- DropIndex
DROP INDEX "public"."MyVendor_mobileNumber_key";

-- DropIndex
DROP INDEX "public"."MyWorker_mobileNumber_key";

-- AlterTable
ALTER TABLE "MyWorker" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MyUser_email_key" ON "MyUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MyVendor_email_key" ON "MyVendor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MyWorker_email_key" ON "MyWorker"("email");
