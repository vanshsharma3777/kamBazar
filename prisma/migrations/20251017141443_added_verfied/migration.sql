-- AlterTable
ALTER TABLE "MyUser" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MyVendor" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MyWorker" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
