import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSizeDto {
  @Expose()
  @IsString({ message: 'El campo "Tamaño" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Tamaño" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Tamaño" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Tamaño" es obligatorio.' })
  @ApiProperty({
    description: 'Nombre del tamaño',
    example: 'XL',
    required: true,
  })
  name: string;
}

export class UpdateSizeDto extends CreateSizeDto {}
