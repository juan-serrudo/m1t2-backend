import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TypeArticleSizeDto {
  @Expose()
  @IsString({ message: 'El campo "Tipo de Artículo" debe ser un texto válido.' })
  @MaxLength(100, { message: 'El campo "Tipo de Artículo" no puede tener más de 100 caracteres.' })
  @MinLength(1, { message: 'El campo "Tipo de Artículo" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Tipo de Artículo" es obligatorio.' })
  @ApiProperty({
    description: 'Nombre del Tipo de Artículo',
    example: 'Ropa',
    required: true,
  })
  name: string;
}
