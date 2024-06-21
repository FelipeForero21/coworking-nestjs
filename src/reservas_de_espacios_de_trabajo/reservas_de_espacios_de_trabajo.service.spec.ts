import { Test, TestingModule } from '@nestjs/testing';
import { ReservasDeEspaciosDeTrabajoService } from './reservas_de_espacios_de_trabajo.service';

describe('ReservasDeEspaciosDeTrabajoService', () => {
  let service: ReservasDeEspaciosDeTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservasDeEspaciosDeTrabajoService],
    }).compile();

    service = module.get<ReservasDeEspaciosDeTrabajoService>(ReservasDeEspaciosDeTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
