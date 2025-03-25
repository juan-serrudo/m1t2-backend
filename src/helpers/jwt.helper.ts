import * as jwt from 'jsonwebtoken';
import { ResponseDTO } from 'src/dto/response.dto';

export const signJWTHelperV1 = (data: any, expiresIn: string): Promise<ResponseDTO> => {
  // === INICIALIZACION DE VARIABLES ===
  const response: ResponseDTO = {
    error: true,
    message: 'Existe problemas con el helper signJWTHelperV1.',
    response: {},
    status: 422,
  };

  // === OPERACION ===
  try {
    const token = jwt.sign(data, `${process.env.APP_JWT_SECRET}`, {
      expiresIn,
    });

    response.error = false;
    response.message = 'Se generó el token.';
    response.response = token;
    response.status = 200;
  } catch (error) {
    response.message = 'No se generó el token.';
    response.response = error;
    response.status = 500;
  }

  // === RESPUESTA ===
  return new Promise((resolve, reject) => {
    if (response.error) {
      reject(response);
    } else {
      resolve(response);
    }
  });
};

export const verifyJWTHelperV1 = (token: string): Promise<ResponseDTO> => {
  // === INICIALIZACION DE VARIABLES ===
  const response: ResponseDTO = {
    error: true,
    message: 'Existe problemas con el helper verifyJWTHelperV1.',
    response: {},
    status: 422,
  };

  // === OPERACION ===
  try {
    const decoded = jwt.verify(token, `${process.env.APP_JWT_SECRET}`);

    response.error = false;
    response.message = 'Token válido.';
    response.response = decoded;
    response.status = 200;
  } catch (error) {
    response.message = 'Token no válido.';
    response.response = error.message;
    response.status = 401;
  }

  // === RESPUESTA ===
  return new Promise((resolve, reject) => {
    if (response.error) {
      reject(response);
    } else {
      resolve(response);
    }
  });
};
