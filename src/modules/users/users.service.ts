import { Inject, Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { Users } from 'src/entitys/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
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
      response.response = await this.usersRepository.find({});
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

  async save( value: CreateUserDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      let user = await this.usersRepository.find({
        where: {
          user: value.user,
        }
      });

      if ( user.length > 0 ) {
        response.message = 'El usuario ya existe.';
        response.response = user[0].user;
        response.status = 409;
      } else {
        value.password = bcrypt.hashSync(value.password, 10);

        response.error = false;
        response.message = 'Se registro en la base de datos.';
        response.response = await this.usersRepository.save(value);
        response.status = 200;
      }
    } catch (error) {
      response.error = true;
      response.message = 'Error al registrar.';
      response.response = error;
      response.status = 502;
    }

    //Fin
    return response;
  }

  async update( id: number, value: UpdateUserDto ): Promise<ResponseDTO> {
    // Inicio
    let response: ResponseDTO = {
      error: true,
      message: 'Error en el sericio',
      response: [],
      status: 422
    }

    // Proceso
    try {
      value.password = bcrypt.hashSync(value.password, 10);

      response.error = false;
      response.message = 'Se actualizo la base de datos.';
      response.response = await this.usersRepository.update(id, value);
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
      response.response = await this.usersRepository.delete(id);
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
