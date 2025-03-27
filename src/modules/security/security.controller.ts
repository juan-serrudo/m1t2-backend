import { Body, Controller, Delete, Get, Param, Patch, Post, Version } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from 'src/dto/response.dto';
import { LoginDto } from 'src/dto/user.dto';
import { SecurityService } from './security.service';

@ApiTags('SEGURIDAD')
@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Version('1')
  @Post('/login')
  @ApiOperation({
    summary: 'Obtiene el token JWT.',
  })
  async login(@Body() value: LoginDto): Promise<ResponseDTO> {
    return this.securityService.login(value);
  }
}