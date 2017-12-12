module.exports = function(app){
  var GroceryItem = require('./../models/GroceryItem.js');

  app.route('/api/items')
  .get((req, res) => {
    return GroceryItem.find((error, doc) => res.send(doc))
  })
  .post((req, res) => {
    var item = req.body;
    var groceryItem = new GroceryItem(item);
    groceryItem.save((err, data) => res.status(300).send());
  })
}
