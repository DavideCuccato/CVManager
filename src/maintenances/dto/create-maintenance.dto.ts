import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateMaintenanceDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  @IsNotEmpty()
  vehicleId: number

  @IsDate()
  @IsNotEmpty()
  dateDone: Date

  @IsNumber()
  @IsNotEmpty()
  kilometers: number
}
