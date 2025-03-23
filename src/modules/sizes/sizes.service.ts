import { Inject, Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { CreateSizeDto } from 'src/dto/size.dto';
import { Sizes } from 'src/entitys/sizes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizesService {

  constructor(
    @Inject('SIZES_REPOSITORY')
    private sizesRepository: Repository<Sizes>,
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
      response.response = await this.sizesRepository.find();
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

  async save( size: CreateSizeDto ): Promise<ResponseDTO> {
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
      response.response = await this.sizesRepository.save(size);
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

  async update( id: number, size: CreateSizeDto ): Promise<ResponseDTO> {
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
      response.response = await this.sizesRepository.update(id, size);
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
      response.response = await this.sizesRepository.delete(id);
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
