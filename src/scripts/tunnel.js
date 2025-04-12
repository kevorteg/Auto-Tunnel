// src/scripts/tunnel.js

import { spawn } from 'child_process';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { createServer } from 'vite';

const PORT = 5173; // Cambiar el puerto si es necesario

// Función que inicia Vite
async function startVite() {
  await createServer({
    server: {
      port: PORT,
      host: true,
      allowedHosts: 'all'
    }
  }).then(server => server.listen());

  console.log(chalk.green(`✅ Vite corriendo en http://localhost:${PORT}`));
}

// Función que lanza Cloudflared y detecta la URL
function startTunnel() {
  console.log(chalk.blue('🌐 Iniciando Cloudflare Tunnel...'));

  const tunnel = spawn('cloudflared', ['tunnel', '--url', `http://localhost:${PORT}`]);

  tunnel.stdout.on('data', (data) => {
    const output = data.toString();
    const match = output.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);

    if (match) {
      const url = match[0];
      console.log(chalk.yellow(`🚀 Tu app ya está disponible en: ${chalk.bold.underline(url)}`));
      clipboardy.write(url);  // Copia la URL al portapapeles
      console.log(chalk.magenta('📋 URL copiada al portapapeles automáticamente'));
    } else {
      process.stdout.write(chalk.gray(output));
    }
  });

  tunnel.stderr.on('data', (data) => {
    process.stderr.write(chalk.red(data.toString()));
  });

  tunnel.on('close', (code) => {
    console.log(chalk.red(`❌ El túnel se cerró con código ${code}`));
  });
}

// Ejecuta todo
startVite().then(startTunnel);
