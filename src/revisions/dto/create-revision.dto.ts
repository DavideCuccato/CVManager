import { IsDate, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateRevisionDto {
  @IsNumber()
  @IsNotEmpty()
  kilometers: number

  @IsDate()
  @IsNotEmpty()
  dateDone: Date

  @IsNumber()
  @IsNotEmpty()
  vehicleId: number
}
