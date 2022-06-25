# Primer entrega Sistemas Distribuidos

Ignacio Barreto

## Requisitos

### Dev

- Docker
- Docker compose

## Inicio rapido

### Dev

Se deberian configurar las varaiables de entorno a partir de .env.example creando un nuevo .env file pero como es para fines practicos ya dejo uno en el paquerte.

Luego de configuradas las variables de entorno, en el directorio raiz del proyecto ejecutar `docker-compose up -d`

Ahora en `http://localhost:<your_api_port>/graphql` (your_api_port en este default env es 4000) puede acceder a la api y en `http://localhost:<your_dashboard_port>` (your_dashboard_port  en este default env es 80)

Puede ir al dahsboard hacer signup y ver su usuario en la base de datos