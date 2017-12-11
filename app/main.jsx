
var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var seedData = [{
  name: "Ice Cream"
},{
  name: "Waffles"
},{
  name: "Candy",
  purchased: true
},{
  name: "Snarks"
}];

ReactDOM.render(<GroceryItemList items={ seedData } />, app);
