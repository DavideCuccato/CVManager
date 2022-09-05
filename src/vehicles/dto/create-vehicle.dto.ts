import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  licensePlate: string

  @IsDate()
  @IsNotEmpty()
  buildDate: Date
}
