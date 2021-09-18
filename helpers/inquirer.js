const inquirer = require('inquirer')
require('colors')

const questions = [{
  type: 'list',
  name: 'opcion',
  message: '¿Qué desea hacer?',
  choices: [
    {
    value: '1',
    name: '1. Crear Tarea'
    },
    {
    value: '2',
    name: '2. Listar Tareas'
    },
    {
    value: '3',
    name: '3. Listar tareas completadas'
    },
    {
    value: '4',
    name: '4. Listar Tareas pendientes'
    },
    {
    value: '5',
    name: '5. Completar tarea(s)'
    },
    {
    value: '6',
    name: '6. Borrar tarea'
    },
    {
    value: '0',
    name: '0. Salir'
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

  await inquirer.prompt(question);

};

module.exports = {
  inquirerMenu,
  pause
}