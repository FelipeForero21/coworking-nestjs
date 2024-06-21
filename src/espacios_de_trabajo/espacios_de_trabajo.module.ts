import { Module } from '@nestjs/common';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';
import { EspaciosDeTrabajoController } from './espacios_de_trabajo.controller';
import { Espacio } from './entities/espacios_de_trabajo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Espacio])],
  controllers: [EspaciosDeTrabajoController],
  providers: [EspaciosDeTrabajoService],
})
export class EspaciosDeTrabajoModule {}
