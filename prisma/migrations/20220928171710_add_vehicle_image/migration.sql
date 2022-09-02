-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "vehicleImage" TEXT;

-- CreateTable
CREATE TABLE "Revision" (
    "id" SERIAL NOT NULL,
    "kilometers" INTEGER NOT NULL,
    "dateDone" TIMESTAMP(3) NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Revision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintenance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateDone" TIMESTAMP(3) NOT NULL,
    "kilometers" INTEGER,
    "vehicleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insurance" (
    "id" SERIAL NOT NULL,
    "insuranceCompany" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "firstInstallment" DECIMAL(65,30) NOT NULL,
    "secondInstallment" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "suspensionDate" TIMESTAMP(3) NOT NULL,
    "reactivationDate" TIMESTAMP(3) NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Insurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsuranceFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "insuranceId" INTEGER,

    CONSTRAINT "InsuranceFeature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Revision" ADD CONSTRAINT "Revision_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsuranceFeature" ADD CONSTRAINT "InsuranceFeature_insuranceId_fkey" FOREIGN KEY ("insuranceId") REFERENCES "Insurance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
