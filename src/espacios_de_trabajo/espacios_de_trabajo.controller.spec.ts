import { Test, TestingModule } from '@nestjs/testing';
import { EspaciosDeTrabajoController } from './espacios_de_trabajo.controller';
import { EspaciosDeTrabajoService } from './espacios_de_trabajo.service';

describe('EspaciosDeTrabajoController', () => {
  let controller: EspaciosDeTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspaciosDeTrabajoController],
      providers: [EspaciosDeTrabajoService],
    }).compile();

    controller = module.get<EspaciosDeTrabajoController>(EspaciosDeTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
