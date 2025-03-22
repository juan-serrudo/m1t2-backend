import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './configurations/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration], expandVariables: true, isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
