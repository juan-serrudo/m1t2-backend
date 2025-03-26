import { Inject, Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { LoginDto } from 'src/dto/user.dto';
import { Users } from 'src/entitys/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { signJWTHelperV1 } from 'src/helpers/jwt.helper';

@Injectable()
export class SecurityService {

  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async login( value: LoginDto ): Promise<ResponseDTO> {
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
        if ( bcrypt.compareSync(value.password, user[0].password) ) {
          let data = {
            user: user[0].user,
            role: user[0].role,
          }

          response = await signJWTHelperV1(data);
        } else {
          response.message = 'El usuario o contraseña incorrecta.';
          response.status = 401;
        }
      } else {
        response.message = 'El usuario o contraseña incorrecta.';
        response.status = 401;
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
}
