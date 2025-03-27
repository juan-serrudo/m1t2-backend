import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateArticleSizeDto {
  @Expose()
  @IsNumber()
  @Min(1, { message: 'El campo "Atículo" debe ser mayor a cero.' })
  @IsNotEmpty({ message: 'El campo "Atículo" es obligatorio.' })
  @ApiProperty({
    description: 'Atículo',
    example: 1,
    required: true,
  })
  articleId: number;

  @Expose()
  @IsNumber()
  @Min(1, { message: 'El campo "Tamaño" debe ser mayor a cero.' })
  @IsNotEmpty({ message: 'El campo "Tamaño" es obligatorio.' })
  @ApiProperty({
    description: 'Tamaño',
    example: 1,
    required: true,
  })
  sizeId: number;
}

export class UpdateArticleSizeDto extends CreateArticleSizeDto {}
