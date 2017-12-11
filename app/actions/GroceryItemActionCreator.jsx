var dispatcher = require('./../dispatcher.js');

module.exports = {
  add(item){
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:add"
    });
  },

  delete(item){
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:delete"
    });
  }


}
