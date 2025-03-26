import { Body, Controller, Delete, Get, Param, Post, Put, Version } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { TypesArticlesService } from './types-articles.service';
import { CreateTypeArticleDto, UpdateTypeArticleDto } from 'src/dto/type-article.dto';

@ApiTags('TIPOS DE ARTICULO')
@Controller('typearticle')
export class TypesArticlesController {
  constructor(private readonly typesArticlesService: TypesArticlesService) {}

  @Version('1')
  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  async findAll(): Promise<ResponseDTO> {
    return this.typesArticlesService.findAll();
  }

  @Version('1')
  @Post('/')
  @ApiOperation({
    summary: 'Registrar en la base de datos.',
  })
  async save(@Body() value: CreateTypeArticleDto): Promise<ResponseDTO> {
    return this.typesArticlesService.save(value);
  }

  @Version('1')
  @Put('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  async update(@Param('id') id: number, @Body() value: UpdateTypeArticleDto): Promise<ResponseDTO> {
    return this.typesArticlesService.update(id, value);
  }

  @Version('1')
  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar de la base de datos.',
  })
  async delete(@Param('id') id: number): Promise<ResponseDTO> {
    return this.typesArticlesService.delete(id);
  }
}