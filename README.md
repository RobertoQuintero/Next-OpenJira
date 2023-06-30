# Nextjs OpenJira App

Para correr localmente se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

Para detener el contenedor de la base de datos

```
docker stop entries-database
```

- MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de daros con información de pruebas

Llamar a:

```
  http://localhost:3000/api/seed
```
