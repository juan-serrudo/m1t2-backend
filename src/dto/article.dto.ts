import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @Expose()
  @IsString({ message: 'El campo "Artículo" debe ser un texto válido.' })
  @MaxLength(200, { message: 'El campo "Artículo" no puede tener más de 200 caracteres.' })
  @MinLength(1, { message: 'El campo "Artículo" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Artículo" es obligatorio.' })
  @ApiProperty({
    description: 'Nombre del artículo',
    example: 'TV',
    required: true,
  })
  name: string;

  @Expose()
  @IsString({ message: 'El campo "Detalle del artículo" debe ser un texto válido.' })
  @MaxLength(500, { message: 'El campo "Detalle del artículo" no puede tener más de 500 caracteres.' })
  @MinLength(1, { message: 'El campo "Detalle del artículo" debe tener al menos 1 carácter.' })
  @IsNotEmpty({ message: 'El campo "Detalle del artículo" es obligatorio.' })
  @ApiProperty({
    description: 'Detalle del artículo',
    example: 'Marca: LG',
    required: true,
  })
  detail: string;

  @Expose()
  @IsString({ message: 'El campo "Descripción del artículo" debe ser un texto válido.' })
  @MaxLength(500, { message: 'El campo "Descripción del artículo" no puede tener más de 500 caracteres.' })
  @ApiProperty({
    description: 'Descripción del artículo',
    example: 'TV más vendido de Bolivia',
    required: false,
  })
  description?: string;

  @Expose()
  @IsNumber()
  @Min(0, { message: 'El campo "Precio del artículo" debe ser mayor o igual a cero.' })
  @IsNotEmpty({ message: 'El campo "Precio del artículo" es obligatorio.' })
  @ApiProperty({
    description: 'Precio del artículo',
    example: '1000',
    required: true,
  })
  price: number;

  @Expose()
  @IsBoolean()
  @IsNotEmpty({ message: 'El campo "¿Tiene tamaño?" es obligatorio.' })
  @ApiProperty({
    description: '¿Tiene tamaño?',
    example: false,
    required: true,
  })
  hasSize: boolean;

  @Expose()
  @IsNumber()
  @Min(1, { message: 'El campo "Tipo de artículo" debe ser mayor a cero.' })
  @IsNotEmpty({ message: 'El campo "Tipo de artículo" es obligatorio.' })
  @ApiProperty({
    description: 'Tipo de artículo',
    example: 1,
    required: true,
  })
  typeArticleId: number;
}

export class UpdateArticleDto extends CreateArticleDto {}
