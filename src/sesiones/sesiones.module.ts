import { Module } from '@nestjs/common';
import { SesionesService } from './sesiones.service';
import { SesionesController } from './sesiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sesion } from './entities/sesione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sesion])],
  providers: [SesionesService],
  controllers: [SesionesController],
})
export class SesionesModule {}