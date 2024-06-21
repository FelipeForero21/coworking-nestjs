import { Test, TestingModule } from '@nestjs/testing';
import { ReservasDeEspaciosDeTrabajoController } from './reservas_de_espacios_de_trabajo.controller';
import { ReservasDeEspaciosDeTrabajoService } from './reservas_de_espacios_de_trabajo.service';

describe('ReservasDeEspaciosDeTrabajoController', () => {
  let controller: ReservasDeEspaciosDeTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservasDeEspaciosDeTrabajoController],
      providers: [ReservasDeEspaciosDeTrabajoService],
    }).compile();

    controller = module.get<ReservasDeEspaciosDeTrabajoController>(ReservasDeEspaciosDeTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
