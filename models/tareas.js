const Tarea = require('./tarea');


class Tareas {

  _listado = {};

  get listArr(){
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

  listarTareas() {}
}

module.exports = Tareas