/*
  Warnings:

  - The primary key for the `MyUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MyVendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MyWorker` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myVendorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myWorkerId_fkey";

-- AlterTable
ALTER TABLE "MyUser" DROP CONSTRAINT "MyUser_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MyUser_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MyUser_id_seq";

-- AlterTable
ALTER TABLE "MyVendor" DROP CONSTRAINT "MyVendor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MyVendor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MyVendor_id_seq";

-- AlterTable
ALTER TABLE "MyWorker" DROP CONSTRAINT "MyWorker_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MyWorker_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MyWorker_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "myUserId" SET DATA TYPE TEXT,
ALTER COLUMN "myVendorId" SET DATA TYPE TEXT,
ALTER COLUMN "myWorkerId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "workType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photos" TEXT[],
    "alternateNumber" TEXT,
    "workId" TEXT NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_workId_fkey" FOREIGN KEY ("workId") REFERENCES "MyUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myUserId_fkey" FOREIGN KEY ("myUserId") REFERENCES "MyUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myVendorId_fkey" FOREIGN KEY ("myVendorId") REFERENCES "MyVendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myWorkerId_fkey" FOREIGN KEY ("myWorkerId") REFERENCES "MyWorker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
