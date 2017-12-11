var React = require('react');

class GroceryItem extends React.Component {
  render(){
    let item = this.props.item;

    return (<div>
        <h4 className={ item.purchased && 'strikethrough' } >{ item.name }</h4>
      </div>)
  }
}

module.exports = GroceryItem;
