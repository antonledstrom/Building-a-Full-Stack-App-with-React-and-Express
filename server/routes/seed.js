var mongoose = require('mongoose');

module.exports = function(app){
  var GroceryItem = require('./../models/GroceryItem.js');

  app.route('/api/seed_items')
  .get((req, res) => {
    mongoose.connection.db.dropDatabase();
    const items = [{
          name: "Ice Cream"
        },{
          name: "Waffles"
        },{
          name: "Candy",
          purchased: true
        },{
          name: "Snarks"
        }];

    for (item of items) {
      var groceryItem = new GroceryItem(item);
      groceryItem.save((err, it) => {});
    }

    // seeded!
    res.send('Database seeded!');
  })
}
