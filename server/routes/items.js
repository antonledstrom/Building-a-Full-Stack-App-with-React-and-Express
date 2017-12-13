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
  });

  app.route('/api/items/:id')
  .delete((req, res) => {
    GroceryItem.findByIdAndRemove(req.params.id, (err, doc) => {
      if(err){
        res.status(500).send();
      }else{
        res.status(204).send();
      }
    })
  })
  .patch((req, res) => {
    GroceryItem.findOne({
      _id: req.body._id
    }, (error, doc) => {
        for(let key in req.body){
          doc[key] = req.body[key]
        }

        doc.save();
        res.status(204).send();
    })
  })
}
