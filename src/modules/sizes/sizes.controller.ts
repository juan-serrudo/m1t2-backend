import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { SizesService } from './sizes.service';

@ApiTags('TAMAÑOS')
@Controller('size')
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  getSizes(): ResponseDTO {
    return this.sizesService.getSizes();
  }
}