import { Body, Controller, Delete, Get, Param, Patch, Post, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { TokenDecorator } from 'src/decorators/jwt.decorator';

@ApiTags('USUARIOS')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Version('1')
  @Get('/')
  @ApiOperation({
    summary: 'Obtiene todos los valores de la tabla.',
  })
  @ApiBearerAuth()
  async findAll(
    @TokenDecorator() tokenValid: ResponseDTO,
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.usersService.findAll();
    }

    return response;
  }

  @Version('1')
  @Post('/')
  @ApiOperation({
    summary: 'Registrar en la base de datos.',
  })
  @ApiBearerAuth()
  async save(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Body() value: CreateUserDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.usersService.save(value);
    }

    return response;
  }

  @Version('1')
  @Patch('/:id')
  @ApiOperation({
    summary: 'Actualizar la base de datos.',
  })
  @ApiBearerAuth()
  async update(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number,
    @Body() value: UpdateUserDto
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.usersService.update(id, value);
    }

    return response;
  }

  @Version('1')
  @Delete('/:id')
  @ApiOperation({
    summary: 'Eliminar de la base de datos.',
  })
  @ApiBearerAuth()
  async delete(
    @TokenDecorator() tokenValid: ResponseDTO,
    @Param('id') id: number
  ): Promise<ResponseDTO> {
    let response = tokenValid;

    if ( ! response.error) {
      response = await this.usersService.delete(id);
    }

    return response;
  }
}