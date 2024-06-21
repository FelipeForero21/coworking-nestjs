import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SalasModule } from './salas/salas.module';
import { EspaciosDeTrabajoModule } from './espacios_de_trabajo/espacios_de_trabajo.module';
import { ReservasDeEspaciosDeTrabajoModule } from './reservas_de_espacios_de_trabajo/reservas_de_espacios_de_trabajo.module';
import { SesionesModule } from './sesiones/sesiones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERDB,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      extra: {
        ssl: true
      },
    }),
    UsuariosModule,
    SalasModule,
    EspaciosDeTrabajoModule,
    ReservasDeEspaciosDeTrabajoModule,
    SesionesModule
  ],

})
export class AppModule {}
