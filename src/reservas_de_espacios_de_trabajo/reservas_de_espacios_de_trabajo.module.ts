import { Module } from '@nestjs/common';
import { ReservasDeEspaciosDeTrabajoService } from './reservas_de_espacios_de_trabajo.service';
import { ReservasDeEspaciosDeTrabajoController } from './reservas_de_espacios_de_trabajo.controller';

@Module({
  controllers: [ReservasDeEspaciosDeTrabajoController],
  providers: [ReservasDeEspaciosDeTrabajoService],
})
export class ReservasDeEspaciosDeTrabajoModule {}
