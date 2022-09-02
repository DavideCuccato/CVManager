import { ApiProperty } from '@nestjs/swagger'
import { Insurance } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

export class InsuranceEntity implements Insurance {
  @ApiProperty()
  id: number

  @ApiProperty()
  insuranceCompany: string

  @ApiProperty()
  description: string

  @ApiProperty()
  firstInstallment: Decimal

  @ApiProperty()
  secondInstallment: Decimal

  @ApiProperty()
  price: Decimal

  @ApiProperty()
  startDate: Date

  @ApiProperty()
  endDate: Date

  @ApiProperty()
  suspensionDate: Date

  @ApiProperty()
  reactivationDate: Date

  // Relation with Vehicle
  @ApiProperty()
  vehicleId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
