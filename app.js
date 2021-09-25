require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveInformation, readInformation } = require('./helpers/saveFile');
const Tareas = require('./models/tareas');

const main = async () => {

  const taskDB = readInformation();
  if (taskDB) {
    
  }

  let opt = '';
  const tareas = new Tareas();
    do {
      opt = await inquirerMenu();

      switch (opt) {
        case '1':
          const desc = await readInput('Descripción: ');
          tareas.crearTarea(desc)
        break;
        case '2':
          console.log(tareas.listArr);
        break;
      }

      /* saveInformation(tareas.listArr) */

      await pause();
    } while (opt != '0'); 
}

main();
