import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { verifyJWTHelperV1 } from 'src/helpers/jwt.helper';
import { ResponseDTO } from 'src/dto/response.dto';

export const TokenDecorator = createParamDecorator(async (data: unknown, ctx: ExecutionContext) => {
  // === INICIALIZACION DE VARIABLES ===
  let response: ResponseDTO = {
    error: true,
    message: 'Existe problemas con el Token.',
    response: {},
    status: 401,
  };

  // === OPERACION ===
  if (ctx.switchToHttp().getRequest().headers.authorization) {
    const authorization = ctx.switchToHttp().getRequest().headers.authorization;
    const authorizationArray = authorization.split(' ');

    if (authorizationArray.length === 2) {
      if (authorizationArray[0] === 'Bearer') {
        await verifyJWTHelperV1(authorizationArray[1])
          .then((res) => (response = res))
          .catch((err) => (response = err));
      }
    }
  }
  // === RESPUESTA ===
  return response;
});
