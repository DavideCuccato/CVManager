import { ApiProperty } from '@nestjs/swagger'
import { Maintenance } from '@prisma/client'

export class MaintenanceEntity implements Maintenance {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  dateDone: Date

  @ApiProperty()
  kilometers: number

  // Relation with Vehicle
  @ApiProperty()
  vehicleId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
