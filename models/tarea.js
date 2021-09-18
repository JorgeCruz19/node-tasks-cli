const { v4: uuidv4 } = require('uuid');

class Tarea {

  id = '';
  desc='';
  completedDate = null;


  constructor( desc ){
    this.id = uuidv4();
    this.desc = desc;
    this.completedDate = null;
    
  }
}

module.exports = Tarea;