import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { VehiclesService } from './vehicles.service'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { VehicleEntity } from './entities/vehicle.entity'

@Controller('vehicles')
@ApiTags('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiCreatedResponse({ type: VehicleEntity })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto)
  }

  @Get()
  @ApiOkResponse({ type: VehicleEntity, isArray: true })
  findAll() {
    return this.vehiclesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: VehicleEntity })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.vehiclesService.findOne(+id)
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: VehicleEntity })
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateVehicleDto: UpdateVehicleDto
  ) {
    return this.vehiclesService.update(+id, updateVehicleDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: VehicleEntity })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.vehiclesService.remove(+id)
  }
}
