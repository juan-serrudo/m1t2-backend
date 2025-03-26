import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @Expose()
  @IsString({ message: 'El campo "Usuario" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Usuario" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Usuario" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Usuario" es obligatorio.' })
  @ApiProperty({
    description: 'Usuario',
    example: 'usuario',
    required: true,
  })
  user: string;

  @Expose()
  @IsString({ message: 'El campo "Contraseña" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Contraseña" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Contraseña" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Contraseña" es obligatorio.' })
  @ApiProperty({
    description: 'Contraseña',
    example: 'MiContrasenia',
    required: true,
  })
  password: string;

  @Expose()
  @IsString({ message: 'El campo "Rol" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Rol" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Rol" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Rol" es obligatorio.' })
  @ApiProperty({
    description: 'Rol',
    example: 'Administrador',
    required: true,
  })
  role: string;
}

export class UpdateUserDto {
  @Expose()
  @IsString({ message: 'El campo "Contraseña" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Contraseña" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Contraseña" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Contraseña" es obligatorio.' })
  @ApiProperty({
    description: 'Contraseña',
    example: 'MiContrasenia',
    required: true,
  })
  password: string;

  @Expose()
  @IsString({ message: 'El campo "Rol" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Rol" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Rol" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Rol" es obligatorio.' })
  @ApiProperty({
    description: 'Rol',
    example: 'Administrador',
    required: true,
  })
  role: string;
}

export class LoginDto {
  @Expose()
  @IsString({ message: 'El campo "Usuario" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Usuario" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Usuario" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Usuario" es obligatorio.' })
  @ApiProperty({
    description: 'Usuario',
    example: 'usuario',
    required: true,
  })
  user: string;

  @Expose()
  @IsString({ message: 'El campo "Contraseña" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Contraseña" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Contraseña" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Contraseña" es obligatorio.' })
  @ApiProperty({
    description: 'Contraseña',
    example: 'MiContrasenia',
    required: true,
  })
  password: string;
}
