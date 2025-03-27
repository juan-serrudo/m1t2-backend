import { Body, Controller, Delete, Get, Param, Post, Put, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import {  ArticlesSizesService } from './articles-sizes.service';
import { TokenDecorator } from 'src/decorators/jwt.decorator';
import { CreateArticleSizeDto, UpdateArticleSizeDto } from 'src/dto/article-size.dto';

@ApiTags('ARTÍCULOS Y SUS TAMAÑOS')
@Controller('article/size')
export class ArticlesSizesController {
  constructor(private readonly articlesSizesService: ArticlesSizesService) {}

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
      response = await this.articlesSizesService.findAll();
    }

    return response;
  }

  @Version('1')
  @Get('/:articleId')
  @ApiOperation({
    summary: 'Obtiene todos los valores de un artículo.',
  })
  @ApiBearerAuth()
  async findArticleId(
    @Param('articleId') articleId: number,
    @TokenDecorator() tokenValid: ResponseDTO,
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.articlesSizesService.findArticleId(articleId);
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
    @Body() value: CreateArticleSizeDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.articlesSizesService.save(value);
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
    @Body() value: UpdateArticleSizeDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.articlesSizesService.update(id, value);
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
      response = await this.articlesSizesService.delete(id);
    }

    return response;
  }
}