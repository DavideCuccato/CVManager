import { Decimal } from '@prisma/client/runtime'
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsDecimal,
} from 'class-validator'

export class CreateInsuranceDto {
  @IsString()
  @IsNotEmpty()
  insuranceCompany: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsDecimal()
  @IsNotEmpty()
  firstInstallment: Decimal

  @IsDecimal()
  @IsNotEmpty()
  secondInstallment: Decimal

  @IsDecimal()
  @IsNotEmpty()
  price: Decimal

  @IsDate()
  @IsNotEmpty()
  startDate: Date

  @IsDate()
  @IsNotEmpty()
  endDate: Date

  @IsDate()
  @IsNotEmpty()
  suspensionDate: Date

  @IsDate()
  @IsNotEmpty()
  reactivationDate: Date

  // Relation with Vehicle
  @IsNumber()
  @IsNotEmpty()
  vehicleId: number
}
