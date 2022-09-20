import { Decimal } from '@prisma/client/runtime'
export class CreateInsuranceDto {
  insuranceCompany: string
  description: string
  firstInstallment: Decimal
  secondInstallment: Decimal
  price: Decimal
  startDate: Date
  endDate: Date
  suspensionDate: Date
  reactivationDate: Date
  vehicleId: number
}
