API de Coworking
Descripción

La API de Coworking es un sistema backend diseñado para gestionar espacios de trabajo en un entorno de coworking. Proporciona funcionalidades para manejar usuarios, espacios de trabajo (espacios), salas, reservas y sesiones.
Tecnologías Utilizadas

    NestJS - Un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables.
    TypeORM - Un ORM para TypeScript y JavaScript.
    PostgreSQL - Una base de datos relacional de código abierto.
    Swagger - Un marco para la documentación de API.

Estructura del Proyecto

El proyecto está organizado en varios módulos, cada uno manejando un aspecto específico del sistema:

    UsuariosModule: Gestiona los datos y operaciones de los usuarios.
    SalasModule: Gestiona los datos y operaciones de las salas.
    EspaciosDeTrabajoModule: Gestiona los datos y operaciones de los espacios de trabajo.
    ReservasDeEspaciosDeTrabajoModule: Gestiona las reservas de los espacios de trabajo.
    SesionesModule: Gestiona los datos y operaciones de las sesiones.


Instalación

Clona el repositorio:


    git clone https://github.com/tu-usuario/coworking-api.git
    

    



Navega al directorio del proyecto:

    cd coworking-api
    

    



Instala las dependencias:



    npm install

Configura las variables de entorno en un archivo .env basado en el archivo .env.example.

Ejecución

Para iniciar la aplicación en modo de desarrollo:


npm run start:dev

La API estará disponible en http://localhost:3000.
Documentación de la API

La documentación de la API está disponible en http://localhost:3000/api una vez que la aplicación esté en funcionamiento. (Swagger)
