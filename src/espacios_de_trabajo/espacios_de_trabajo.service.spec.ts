import { Test, TestingModule } from '@nestjs/testing';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';

describe('EspaciosDeTrabajoService', () => {
  let service: EspaciosDeTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspaciosDeTrabajoService],
    }).compile();

    service = module.get<EspaciosDeTrabajoService>(EspaciosDeTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
