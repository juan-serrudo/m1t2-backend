import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from 'src/dto/article.dto';
import { ResponseDTO } from 'src/dto/response.dto';
import { Articles } from 'src/entitys/articles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {

  constructor(
    @Inject('ARTICLES_REPOSITORY')
    private articlesRepository: Repository<Articles>,
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
      response.response = await this.articlesRepository.find();
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

  async save( value: CreateArticleDto ): Promise<ResponseDTO> {
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
      response.response = await this.articlesRepository.save(value);
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

  async update( id: number, value: UpdateArticleDto ): Promise<ResponseDTO> {
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
      response.response = await this.articlesRepository.update(id, value);
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
      response.response = await this.articlesRepository.delete(id);
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
