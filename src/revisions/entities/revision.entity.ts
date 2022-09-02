import { ApiProperty } from '@nestjs/swagger'
import { Revision } from '@prisma/client'

export class RevisionEntity implements Revision {
  @ApiProperty()
  id: number

  @ApiProperty()
  kilometers: number

  @ApiProperty()
  dateDone: Date

  // Relation with Vehicle
  @ApiProperty()
  vehicleId: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
