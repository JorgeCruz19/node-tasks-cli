require("colors");

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("===================".green);
    console.log("   Selecciona una opcion   ".green);
    console.log("===================\n".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tarea`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Selecione una opcion: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPresione ${"ENTER".green} para continuar: `, (opt) => {
      readLine.close();
      resolve()
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
