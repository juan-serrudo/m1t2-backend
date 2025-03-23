import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { SizesService } from './sizes.service';
import { CreateSizeDto } from 'src/dto/size.dto';

@ApiTags('TAMAÑOS')
@Controller('size')
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  async findAll(): Promise<ResponseDTO> {
    return this.sizesService.findAll();
  }

  @Post('/')
  @ApiOperation({
    summary: 'Registrar en la base de datos.',
  })
  async save(@Body() size: CreateSizeDto): Promise<ResponseDTO> {
    return this.sizesService.save(size);
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  async update(@Param('id') id: number, @Body() size: CreateSizeDto): Promise<ResponseDTO> {
    return this.sizesService.update(id, size);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar de la base de datos.',
  })
  async delete(@Param('id') id: number): Promise<ResponseDTO> {
    return this.sizesService.delete(id);
  }
}