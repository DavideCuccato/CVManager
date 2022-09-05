import { Vehicle } from '@prisma/client'
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateMaintenanceDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  vehicle: Vehicle

  @IsDate()
  @IsNotEmpty()
  dateDone: Date

  @IsNumber()
  @IsNotEmpty()
  kilometers: number
}
