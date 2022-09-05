import { InsuranceFeature } from '@prisma/client'
import { IsString, IsNotEmpty, IsDate } from 'class-validator'

export class CreateInsuranceDto {
  @IsString()
  @IsNotEmpty()
  insuranceCompany: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  features: InsuranceFeature[]

  @IsDate()
  @IsNotEmpty()
  buildDate: Date
}
