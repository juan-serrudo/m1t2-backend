import { Inject, Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { Sizes } from 'src/entitys/sizes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizesService {

  constructor(
    @Inject('SIZES_REPOSITORY')
    private sizesRepository: Repository<Sizes>,
  ) {}

  getSizes(): ResponseDTO {
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
      response.message = 'Se logro consultar a la base de datos.';
      response.response = this.sizesRepository.find().then(() => {});
      response.status = 200;

    } catch (error) {
      response.error = true;
      response.message = 'Error al obtener los tamaños';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

}
