/*
  Warnings:

  - The primary key for the `MyUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MyUser` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MyVendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MyVendor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MyWorker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MyWorker` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `myUserId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `myVendorId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `myWorkerId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `workId` on the `Work` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myVendorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myWorkerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Work" DROP CONSTRAINT "Work_workId_fkey";

-- AlterTable
ALTER TABLE "MyUser" DROP CONSTRAINT "MyUser_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MyUser_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MyVendor" DROP CONSTRAINT "MyVendor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MyVendor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MyWorker" DROP CONSTRAINT "MyWorker_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MyWorker_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "myUserId",
ADD COLUMN     "myUserId" INTEGER,
DROP COLUMN "myVendorId",
ADD COLUMN     "myVendorId" INTEGER,
DROP COLUMN "myWorkerId",
ADD COLUMN     "myWorkerId" INTEGER;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "workId",
ADD COLUMN     "workId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_workId_fkey" FOREIGN KEY ("workId") REFERENCES "MyUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myUserId_fkey" FOREIGN KEY ("myUserId") REFERENCES "MyUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myVendorId_fkey" FOREIGN KEY ("myVendorId") REFERENCES "MyVendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myWorkerId_fkey" FOREIGN KEY ("myWorkerId") REFERENCES "MyWorker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
