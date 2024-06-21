import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SalasModule } from './salas/salas.module';
import { EspaciosDeTrabajoModule } from './espacios_de_trabajo/espacios_de_trabajo.module';
import { ReservasDeEspaciosDeTrabajoModule } from './reservas_de_espacios_de_trabajo/reservas_de_espacios_de_trabajo.module';
import { SesionesModule } from './sesiones/sesiones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Espacio } from './espacios_de_trabajo/entities/espacios_de_trabajo.entity';
import { Sala } from './salas/entities/sala.entity';
import { ReservaDeEspacio } from './reservas_de_espacios_de_trabajo/entities/reservas_de_espacios_de_trabajo.entity';
import { Sesion } from './sesiones/entities/sesione.entity';

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
      entities: [Usuario, Espacio, Sala, ReservaDeEspacio, Sesion],
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
