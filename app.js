require('colors');

const { inquirerMenu, pause, readInput, listDeleteTask, confirm, showCheckList } = require('./helpers/inquirer');
const { saveInformation, readInformation } = require('./helpers/saveFile');
const Tareas = require('./models/tareas');

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const taskDB = readInformation();
  if (taskDB) {
    tareas.loadTaskFromArray(taskDB)
  }

    do {
      opt = await inquirerMenu();

      switch (opt) {
        case '1':
          const desc = await readInput('Descripción: ');
          tareas.crearTarea(desc)
        break;
        case '2':
          tareas.toListCompleted();
        break;
        case '3':
          tareas.toListPendingsOrCompletes(true);
        break;
        case '4':
          tareas.toListPendingsOrCompletes(false);
        break;
        case '5':
          const ids = await showCheckList(tareas.listArr)
          tareas.toggleCompleted(ids);
        break;
        case '6':
          const id = await listDeleteTask(tareas.listArr)
          if (id !== '0') {
            const ok = await confirm('¿Estás seguro?')
            if (ok) {
              tareas.deleteTask(id)
              console.log('Task Delete');
            }
          }
        break;
      }

      saveInformation(tareas.listArr)

      await pause();
    } while (opt != '0'); 
}

main();
