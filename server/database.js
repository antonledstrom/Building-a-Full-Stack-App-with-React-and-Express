var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js')
mongoose.connect('mongodb://localhost/grocery',{
  useMongoClient: true,
});
