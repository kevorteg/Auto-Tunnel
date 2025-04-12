// tunnelMessages.js
import chalk from 'chalk';
// Alternativa si hay problemas con chalk ESM
// const chalk = { green: (text) => `\x1b[32m${text}\x1b[0m`, yellow: (text) => `\x1b[33m${text}\x1b[0m`, red: (text) => `\x1b[31m${text}\x1b[0m` };

export const displayMessages = () => {
  console.log(chalk.green('✅ Túnel creado exitosamente'));
  console.log(chalk.yellow('⚠️ Este túnel es solo para pruebas'));
  console.log(chalk.red('❌ Hubo un error en la creación del túnel'));
};
