import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleSizeDto, UpdateArticleSizeDto } from 'src/dto/article-size.dto';
import { ResponseDTO } from 'src/dto/response.dto';
import { ArticlesSizes } from 'src/entitys/articles-sizes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesSizesService {

  constructor(
    @Inject('ARTICLES_SIZES_REPOSITORY')
    private articlesSizesRepository: Repository<ArticlesSizes>,
  ) {}

  async findAll(): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'La consulta a la base de datos se realizó correctamente.';
      response.response = await this.articlesSizesRepository.find();
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error en la consulta.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async findArticleId( articleId: number ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'La consulta a la base de datos se realizó correctamente.';
      response.response = await this.articlesSizesRepository.find({
        where: {
          articleId,
        }
      });
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error en la consulta.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async save( value: CreateArticleSizeDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'Se registro en la base de datos.';
      response.response = await this.articlesSizesRepository.save(value);
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al registrar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async update( id: number, value: UpdateArticleSizeDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'Se actualizo la base de datos.';
      response.response = await this.articlesSizesRepository.update(id, value);
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al actualizar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async delete( id: number ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      response.error = false;
      response.message = 'Se elimino de la base de datos.';
      response.response = await this.articlesSizesRepository.delete(id);
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al eliminar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

}
