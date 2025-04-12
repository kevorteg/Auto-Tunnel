# AutoTunnel

![Node version](https://img.shields.io/badge/Node-14%2B-brightgreen?style=flat-square&logo=node.js)
![Vite](https://img.shields.io/badge/Vite-Ready-purple?style=flat-square&logo=vite)
![Cloudflare Tunnel](https://img.shields.io/badge/Cloudflare-Tunnel-orange?style=flat-square&logo=cloudflare)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)


## Descripción
AutoTunnel es una herramienta que permite crear automáticamente túneles con Cloudflare para exponer aplicaciones locales desarrolladas con Vite a Internet. Facilita el proceso de desarrollo y pruebas al generar una URL pública temporal para compartir tu aplicación sin necesidad de desplegarla.

## Características
- ✅ Inicia automáticamente un servidor Vite local
- 🌐 Crea un túnel seguro con Cloudflare
- 📋 Copia automáticamente la URL del túnel al portapapeles
- 🚀 Facilita compartir tu aplicación en desarrollo con otros

## Requisitos previos
- Node.js (versión recomendada: 14.x o superior)
- [Cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) instalado en tu sistema

### Instalación de Cloudflared
Para más sistemas operativos, consulta la [documentación oficial de Cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/).

#### Windows
- Usando Winget (si lo tienes instalado):
  ```
  winget install --id Cloudflare.cloudflared
  ```

#### macOS
- Usando Homebrew:
  ```
  brew install cloudflared
  ```

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/kevorteg/Auto-Tunnel
   cd AutoTunnel
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor Vite y crear automáticamente un túnel con Cloudflare:

```
npm run auto-tunnel
```

Esto realizará las siguientes acciones:
1. Iniciará un servidor Vite en http://localhost:5173
2. Creará un túnel con Cloudflare que apunta a tu servidor local
3. Mostrará la URL pública generada en la consola
4. Copiará automáticamente la URL al portapapeles para que puedas compartirla fácilmente

Alternativamente, si solo quieres iniciar el servidor Vite sin crear un túnel:

```
npm start
```

## Dependencias principales

- [Vite](https://vitejs.dev/): Entorno de desarrollo rápido
- [Chalk](https://github.com/chalk/chalk): Colorea la salida de la consola
- [Clipboardy](https://github.com/sindresorhus/clipboardy): Maneja el portapapeles del sistema

## Personalización

Si necesitas cambiar el puerto predeterminado (5173), puedes modificarlo en:
- `src/scripts/tunnel.js`
- `vite.config.js`

## Notas importantes

- Este proyecto está diseñado para entornos de desarrollo y pruebas, no para producción.
- Los túneles de Cloudflare tienen limitaciones de tiempo y tráfico en su versión gratuita.
- Asegúrate de tener instalado `cloudflared` en tu sistema y accesible desde la línea de comandos.

## Licencia
MIT © Kevin Ortega

