// tunnelMessages.js
import chalk from 'chalk';

export const displayMessages = () => {
  console.log(chalk.green('✅ Túnel creado exitosamente'));
  console.log(chalk.yellow('⚠️ Este túnel es solo para pruebas'));
  console.log(chalk.red('❌ Hubo un error en la creación del túnel'));
};
