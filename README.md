# Olinky Website

Sitio web corporativo construido con React, TypeScript y Vite.

## Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Desarrollo Local

```sh
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview del build
npm run preview

# Ejecutar tests
npm test
```

## Despliegue

Este proyecto incluye configuración Docker para despliegue en servidores:

```sh
# Construir imagen Docker
docker build -t olinky-web .

# Ejecutar con Docker Compose
docker-compose up -d
```

### Despliegue en EasyPanel/Hostinger

1. Conecta tu repositorio Git
2. EasyPanel detectará automáticamente el Dockerfile
3. Configura el puerto 80
4. Despliega

## Estructura del Proyecto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas de la aplicación
├── hooks/         # Custom hooks
├── lib/           # Utilidades
└── assets/        # Imágenes y recursos
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter
- `npm test` - Ejecutar tests
