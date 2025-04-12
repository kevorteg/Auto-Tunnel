const { execSync } = require('child_process');
const os = require('os');

function isCloudflaredInstalled() {
  try {
    execSync('cloudflared --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function installCloudflared() {
  const platform = os.platform();
  try {
    if (platform === 'win32') {
      console.log('Instalando Cloudflared en Windows...');
      execSync('winget install --id Cloudflare.cloudflared', { stdio: 'inherit' });
    } else if (platform === 'darwin') {
      console.log('Instalando Cloudflared en macOS...');
      execSync('brew install cloudflared', { stdio: 'inherit' });
    } else {
      console.log('Por favor, instala Cloudflared manualmente para tu sistema operativo.');
    }
  } catch (error) {
    console.error('Error al instalar Cloudflared:', error);
  }
}

if (!isCloudflaredInstalled()) {
  console.log('Cloudflared no está instalado. Procediendo con la instalación...');
  installCloudflared();
} else {
  console.log('Cloudflared ya está instalado.');
}