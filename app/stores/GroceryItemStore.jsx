var dispatcher = require('./../dispatcher.js');
class GroceryItemStore {
  constructor(){
    this.items = [{
        name: "Ice Cream"
      },{
        name: "Waffles"
      },{
        name: "Candy",
        purchased: true
      },{
        name: "Snarks"
      }];

    this.listeners = [];
    dispatcher.register((event)=>{
      var split = event.type.split(':');
      if(split[0] === 'grocery-item'){

        switch (split[1]) {
          case "add":
            this.addGroceryItem(event.payload)
            break;
        }
      }
    })
  }

  getItems(){
    return this.items;
  }

  onChange(listener){
    this.listeners.push(listener);
  }

  triggerListeners(){
    this.listeners.forEach((listener) => listener(this.items))
  }

  addGroceryItem(item){
    this.items.push(item);
    this.triggerListeners();
  }
}

module.exports = new GroceryItemStore()
