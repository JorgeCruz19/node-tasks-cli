const inquirer = require('inquirer')
require('colors')

const questions = [{
  type: 'list',
  name: 'opcion',
  message: '¿Qué desea hacer?',
  choices: [
    {
    value: '1',
    name: `${'1.'.green} Crear Tarea`
    },
    {
    value: '2',
    name: `${'2.'.green} Listar Tareas`
    },
    {
    value: '3',
    name: `${'3.'.green} Listar tareas completadas`
    },
    {
    value: '4',
    name: `${'4.'.green} Listar Tareas pendientes`
    },
    {
    value: '5',
    name: `${'5.'.green} Completar tarea(s)`
    },
    {
    value: '6',
    name: `${'6.'.green} Borrar tarea`
    },
    {
    value: '0',
    name: `${'0.'.green} Salir`
    },
  ],
}]

const inquirerMenu = async () => {
  console.clear();
  console.log("===================".green);
  console.log("   Selecciona una opcion   ".green);
  console.log("===================\n".green);

  const {opcion} = await inquirer.prompt(questions)

  return opcion;
}

const pause = async () => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presion ${'enter'.green} para continuar`,
    },
  ];

  console.log('\n');
  await inquirer.prompt(question);

};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value){
        if(value.length === 0 ){
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ]
  const { desc } = await inquirer.prompt(question);
  
  return desc;
}

module.exports = {
  inquirerMenu,
  pause,
  readInput
}