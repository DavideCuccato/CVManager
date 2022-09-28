import { ApiProperty } from '@nestjs/swagger'
import { Vehicle } from '@prisma/client'

export class VehicleEntity implements Vehicle {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  licensePlate: string

  @ApiProperty()
  buildDate: Date

  @ApiProperty()
  vehicleImage: string | null

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
