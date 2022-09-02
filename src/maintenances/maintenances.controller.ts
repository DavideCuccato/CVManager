import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Patch,
} from '@nestjs/common'
import { MaintenancesService } from './maintenances.service'
import { CreateMaintenanceDto } from './dto/create-maintenance.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto'
import { MaintenanceEntity } from './entities/maintenance.entity'

@Controller('maintenances')
@ApiTags('Maintenances')
export class MaintenancesController {
  constructor(private readonly maintenancesService: MaintenancesService) {}

  @Post()
  @ApiCreatedResponse({ type: MaintenanceEntity })
  create(@Body() createMaintenanceDto: CreateMaintenanceDto) {
    return this.maintenancesService.create(createMaintenanceDto)
  }

  @Get()
  @ApiOkResponse({ type: MaintenanceEntity, isArray: true })
  findAll() {
    return this.maintenancesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: MaintenanceEntity })
  findOne(@Param('id') id: string) {
    return this.maintenancesService.findOne(+id)
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MaintenanceEntity })
  update(
    @Param('id') id: string,
    @Body() updateMaintenanceDto: UpdateMaintenanceDto
  ) {
    return this.maintenancesService.update(+id, updateMaintenanceDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: MaintenanceEntity })
  remove(@Param('id') id: string) {
    return this.maintenancesService.remove(+id)
  }
}
