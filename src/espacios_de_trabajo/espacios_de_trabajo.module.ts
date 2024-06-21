import { Module } from '@nestjs/common';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';
import { EspaciosDeTrabajoController } from './espacios_de_trabajo.controller';

@Module({
  controllers: [EspaciosDeTrabajoController],
  providers: [EspaciosDeTrabajoService],
})
export class EspaciosDeTrabajoModule {}
