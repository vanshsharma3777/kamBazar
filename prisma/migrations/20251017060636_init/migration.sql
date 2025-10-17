-- CreateTable
CREATE TABLE "MyWorker" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "mobileNumber" VARCHAR(10) NOT NULL,
    "profilePhoto" TEXT,
    "photo" TEXT,
    "video" TEXT,
    "dailyWage" DOUBLE PRECISION,
    "address" VARCHAR(255),
    "rating" DOUBLE PRECISION,
    "occupation" TEXT,
    "feedback" TEXT,
    "pastDeals" TEXT,
    "presentDeals" TEXT,
    "age" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MyWorker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyVendor" (
    "id" SERIAL NOT NULL,
    "ownerName" VARCHAR(50) NOT NULL,
    "mobileNumber" VARCHAR(10),
    "profilePhoto" TEXT,
    "shopName" VARCHAR(100),
    "shopPhoto" TEXT,
    "email" TEXT NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255),
    "rating" DOUBLE PRECISION,
    "bussinessType" TEXT,
    "feedback" TEXT,
    "gstNumber" VARCHAR(20),
    "age" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MyVendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyUser" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "mobileNumber" VARCHAR(10) NOT NULL,
    "profilePhoto" TEXT DEFAULT '',
    "work" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "address" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MyUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "myUserId" INTEGER,
    "myVendorId" INTEGER,
    "myWorkerId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MyWorker_mobileNumber_key" ON "MyWorker"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MyVendor_email_key" ON "MyVendor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MyUser_mobileNumber_key" ON "MyUser"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myUserId_fkey" FOREIGN KEY ("myUserId") REFERENCES "MyUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myVendorId_fkey" FOREIGN KEY ("myVendorId") REFERENCES "MyVendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_myWorkerId_fkey" FOREIGN KEY ("myWorkerId") REFERENCES "MyWorker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
