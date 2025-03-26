import { Body, Controller, Delete, Get, Param, Post, Put, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { TypesArticlesService } from './types-articles.service';
import { CreateTypeArticleDto, UpdateTypeArticleDto } from 'src/dto/type-article.dto';
import { TokenDecorator } from 'src/decorators/jwt.decorator';

@ApiTags('TIPOS DE ARTICULO')
@Controller('typearticle')
export class TypesArticlesController {
  constructor(private readonly typesArticlesService: TypesArticlesService) {}

  @Version('1')
  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  @ApiBearerAuth()
  async findAll(
      @TokenDecorator() tokenValid: ResponseDTO
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.typesArticlesService.findAll();
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
      @Body() value: CreateTypeArticleDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.typesArticlesService.save(value);
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
    @Body() value: UpdateTypeArticleDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.typesArticlesService.update(id, value);
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
      response = await this.typesArticlesService.delete(id);
    }

    return response;
  }
}