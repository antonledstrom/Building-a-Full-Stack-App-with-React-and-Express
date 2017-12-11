var React = require('react');
var GroceryItem = require('./GroceryItem.jsx');

class GroceryItemList extends React.Component {
  render(){
    return (<div>
        <h1>Hello react Grocery list!</h1>
        <div>
          {
            this.props.items.map((item, i ) => (<GroceryItem key={ 'item_' + i } item={ item } />))
          }
        </div>
      </div>)
  }
}

module.exports = GroceryItemList;
