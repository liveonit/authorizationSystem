# Sistema de autenticación - segunda entrega Seguridad
Integrantes: Ignacio Barreto, German Rios, Sebastian Olivera, Patricio Zarauz

## Requisitos
### Dev

- Docker
- Docker compose
- node
- Manejador de paquetes de node (npm o yarn)

## Instalacion 
Se deberan instalar todas dependencias necesarias en las siguientes carpetas: 
- ./services/api
- ./services/dashboard 
En ambos casos ejecutar `npm install` (en caso de tener npm instalado)

Ademas se debera configurar las varaiables de entorno a partir de .env.example creando un nuevo .env file, en la misma ruta. 

Luego de configuradas las variables de entorno, en el directorio raiz del proyecto ejecutar `docker-compose up -d`

Ahora en `http://localhost:<your_api_port>/graphql` (your_api_port en este default env es 4000) puede acceder a la api y en `http://localhost:<your_dashboard_port>` (your_dashboard_port  en este default env es 80)

Puede ir al dahsboard hacer signup y ver su usuario en la base de datos

## Demo
El video conteniendo la demo del proyecto se encuentra en la carpeta demo