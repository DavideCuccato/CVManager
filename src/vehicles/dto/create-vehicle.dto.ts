import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  name: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty()
  licensePlate: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  buildDate: Date
}
