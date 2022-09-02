-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "buildDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
