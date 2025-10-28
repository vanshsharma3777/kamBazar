/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myVendorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_myWorkerId_fkey";

-- AlterTable
ALTER TABLE "MyUser" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "MyWorker" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "public"."Account";

-- DropTable
DROP TABLE "public"."Session";

-- DropTable
DROP TABLE "public"."User";
