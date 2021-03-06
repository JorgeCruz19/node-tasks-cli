const Tarea = require('./tarea');


class Tareas {

  _listado = {};

  get listArr() {
    const list = [];

    Object.keys(this._listado).forEach(key => {
      list.push(this._listado[key])
    })

    return list;
  }

  constructor(){
    this._listado = {};
  }


  crearTarea(desc = ''){
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  loadTaskFromArray(tasks = []){
    tasks.forEach(task => {
      this._listado[task.id] = task;
    })
  }

  toListCompleted() {
    console.log();
    this.listArr.forEach((task,index) => {
      const idx = `${index + 1}`.green
      const { desc, completedDate} = task;
      const status = (completedDate) ? 'Complete'.green : 'Pending'.red

      console.log(`${idx}. ${desc} :: ${status}`);
    })
  }

  toListPendingsOrCompletes(complete = true){
    console.log();
    let count = 0;
    this.listArr.forEach((task) => {
      const { desc, completedDate} = task;
      const status = (completedDate) ? 'Complete'.green : 'Pending'.red

      if (complete) {
        if(completedDate){
          count+= 1;
          console.log(`${(count + '.').green} ${desc} :: ${completedDate}`);
        }
      } else {
        if (!completedDate) {
          count+= 1;
          console.log(`${(count + '.').green} ${desc} :: ${status}`);
        }
      }
    })
  }

  deleteTask(id = ''){
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  toggleCompleted(ids = []){
    ids.forEach(id => {
      const task = this._listado[id];
      if (!task.completedDate) {
        task.completedDate = new Date().toISOString();
      }
    });
    this.listArr.forEach(task => {
      if (!ids.includes(task.id)) {
        this._listado[task.id].completedDate = null;
      }
    })
  }
}

module.exports = Tareas