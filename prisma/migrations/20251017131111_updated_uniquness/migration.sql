/*
  Warnings:

  - You are about to alter the column `email` on the `MyVendor` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - A unique constraint covering the columns `[mobileNumber]` on the table `MyVendor` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."MyVendor_email_key";

-- AlterTable
ALTER TABLE "MyVendor" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50);

-- CreateIndex
CREATE UNIQUE INDEX "MyVendor_mobileNumber_key" ON "MyVendor"("mobileNumber");
