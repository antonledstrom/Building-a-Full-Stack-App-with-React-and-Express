var React = require('react');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

class GroceryItemList extends React.Component {
  render(){
    return (<div>
        <h1>Hello react Grocery list!</h1>
        <div>
          {
            this.props.items.map((item, i ) => (<GroceryItem key={ 'item_' + i } item={ item } />))
          }
        </div>

        <GroceryListAddItem />
      </div>)
  }
}

module.exports = GroceryItemList;
