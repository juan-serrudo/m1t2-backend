import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { TypesArticlesService } from './types-articles.service';
import { TypeArticleSizeDto } from 'src/dto/type-article.dto';

@ApiTags('TIPOS DE ARTICULO')
@Controller('typearticle')
export class TypesArticlesSController {
  constructor(private readonly typesArticlesService: TypesArticlesService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  async findAll(): Promise<ResponseDTO> {
    return this.typesArticlesService.findAll();
  }

  @Post('/')
  @ApiOperation({
    summary: 'Registrar en la base de datos.',
  })
  async save(@Body() size: TypeArticleSizeDto): Promise<ResponseDTO> {
    return this.typesArticlesService.save(size);
  }

  @Put('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  async update(@Param('id') id: number, @Body() size: TypeArticleSizeDto): Promise<ResponseDTO> {
    return this.typesArticlesService.update(id, size);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar de la base de datos.',
  })
  async delete(@Param('id') id: number): Promise<ResponseDTO> {
    return this.typesArticlesService.delete(id);
  }
}