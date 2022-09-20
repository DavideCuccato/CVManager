import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { InsurancesService } from './insurances.service'
import { CreateInsuranceDto } from './dto/create-insurance.dto'
import { UpdateInsuranceDto } from './dto/update-insurance.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { InsuranceEntity } from './entities/insurance.entity'

@Controller('insurances')
@ApiTags('Insurances')
export class InsurancesController {
  constructor(private readonly insurancesService: InsurancesService) {}

  @Post()
  @ApiCreatedResponse({ type: InsuranceEntity })
  create(@Body() createInsuranceDto: CreateInsuranceDto) {
    return this.insurancesService.create(createInsuranceDto)
  }

  @Get()
  @ApiOkResponse({ type: InsuranceEntity, isArray: true })
  findAll() {
    return this.insurancesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: InsuranceEntity })
  findOne(@Param('id') id: string) {
    return this.insurancesService.findOne(+id)
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: InsuranceEntity })
  update(
    @Param('id') id: string,
    @Body() updateInsuranceDto: UpdateInsuranceDto
  ) {
    return this.insurancesService.update(+id, updateInsuranceDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: InsuranceEntity })
  remove(@Param('id') id: string) {
    return this.insurancesService.remove(+id)
  }
}
