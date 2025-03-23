import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './configurations/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SizesController } from './modules/sizes/sizes.controller';
import { SizesService } from './modules/sizes/sizes.service';
import { sizesProviders } from './providers/sizes.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: Boolean(process.env.ENV_SYNCHRONIZE) || true
    }),
  ],
  controllers: [
    AppController,
    SizesController,
  ],
  providers: [
    AppService,
    SizesService,
    ...sizesProviders,
  ],
})

export class AppModule {}
