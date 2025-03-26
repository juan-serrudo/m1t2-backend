import { Body, Controller, Delete, Get, Param, Post, Put, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { SizesService } from './sizes.service';
import { CreateSizeDto, UpdateSizeDto } from 'src/dto/size.dto';
import { TokenDecorator } from 'src/decorators/jwt.decorator';

@ApiTags('TAMAÑOS')
@Controller('size')
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  @Version('1')
  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  @ApiBearerAuth()
  async findAll(
      @TokenDecorator() tokenValid: ResponseDTO,
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.sizesService.findAll();
    }

    return response;
  }

  @Version('1')
  @Post('/')
  @ApiOperation({
    summary: 'Registrar en la base de datos.',
  })
  @ApiBearerAuth()
  async save(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Body() value: CreateSizeDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.sizesService.save(value);
    }

    return response;
  }

  @Version('1')
  @Put('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  @ApiBearerAuth()
  async update(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number,
    @Body() value: UpdateSizeDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.sizesService.update(id, value);
    }

    return response;
  }

  @Version('1')
  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar de la base de datos.',
  })
  @ApiBearerAuth()
  async delete(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.sizesService.delete(id);
    }

    return response;
  }
}