import { Module } from '@nestjs/common';
import { SalasService } from './salas.service';
import { SalasController } from './salas.controller';
import { Sala } from './entities/sala.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Sala])],
  providers: [SalasService],
  controllers: [SalasController],
})
export class SalasModule {}