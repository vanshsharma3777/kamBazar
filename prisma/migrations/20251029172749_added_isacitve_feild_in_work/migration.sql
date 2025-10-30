/*
  Warnings:

  - You are about to drop the column `isActive` on the `MyUser` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `MyUser` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `MyVendor` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `MyWorker` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MyUser" DROP COLUMN "isActive",
DROP COLUMN "verified";

-- AlterTable
ALTER TABLE "MyVendor" DROP COLUMN "verified";

-- AlterTable
ALTER TABLE "MyWorker" DROP COLUMN "verified";

-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
