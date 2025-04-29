# primer-mcp

Este repositorio está diseñado para la creación de herramientas y servidores MCP (Model Context Protocol). Proporciona configuraciones y scripts para diferentes servidores MCP, incluyendo integraciones con bases de datos, servicios en la nube y herramientas de desarrollo.

## Servidores MCP disponibles

- **El Tiempo**: Servidor MCP para datos meteorológicos.
- **File System**: Servidor MCP para interactuar con el sistema de archivos.
- **PostgreSQL**: Servidor MCP para bases de datos PostgreSQL.
- **MongoDB**: Servidor MCP para bases de datos MongoDB.
- **Elasticsearch**: Servidor MCP para Elasticsearch.
- **GitHub**: Servidor MCP para integraciones con GitHub.
- **Playwright**: Servidor MCP para pruebas automatizadas con Playwright.
- **MariaDB**: Servidor MCP para bases de datos MariaDB.
- **Figma**: Servidor MCP para integraciones con Figma.

## Configuración

Cada servidor MCP tiene su propia configuración específica. Asegúrate de revisar las variables de entorno necesarias y los comandos asociados en el archivo de configuración del proyecto.

## Uso

Para iniciar un servidor MCP, utiliza el comando correspondiente. Por ejemplo:

```bash
npx --y tsx /home/valentina/Develoment/primer-mcp
```

Reemplaza el comando y los argumentos según el servidor MCP que desees iniciar.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio o mejora.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Para Empezar

### Introducción
Puedes consultar la introducción al protocolo Model Context Protocol (MCP) en el siguiente enlace:
[Introducción a MCP](https://modelcontextprotocol.io/introduction)

### SDK
Para este proyecto, se eligió el SDK de TypeScript. Puedes encontrar más información sobre este SDK aquí:
[TypeScript SDK para MCP](https://github.com/modelcontextprotocol/typescript-sdk)

### Configuración por Sistema Operativo
- **Para Mac**: Claude en escritorio.
- **Para Ubuntu**: Visual.
- También se puede usar en Cursor.

### Comandos Útiles
- `pwd`: Muestra la ruta del archivo local.
- `tsx`: Ejecuta un archivo TypeScript sin necesidad de un compilador.

### Inspector
Para ejecutar el inspector y un archivo TypeScript, puedes usar los siguientes comandos:
```
npx -y @modelcontextprotocol/inspector
npx -y tsx main.ts
```

### Servidores
Consulta más información sobre servidores MCP en el siguiente enlace:
[Servidores MCP](https://github.com/modelcontextprotocol/servers?tab=readme-ov-file)
