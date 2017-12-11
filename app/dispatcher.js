var guid = require('guid');
var listeners = {}

module.exports = {
  register(callback){
    var id = guid.raw();
    listeners[id] = callback;
    return id;
  },
  dispatch(payload){
    console.log("Dispatching... ", payload);

    for(let id in listeners){
      var listener = listeners[id];
      listener(payload);
    }
  }
}
