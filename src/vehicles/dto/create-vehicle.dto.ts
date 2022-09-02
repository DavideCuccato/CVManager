import { MaxLength } from 'class-validator'

export class CreateVehicleDto {
  name: string

  @MaxLength(15)
  licensePlate: string

  buildDate: Date
}
