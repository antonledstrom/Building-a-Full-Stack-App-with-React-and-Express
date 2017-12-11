var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx')

class GroceryItem extends React.Component {
  delete(e){
    e.preventDefault();
    action.delete(this.props.item);
  }
  
  render(){
    let item = this.props.item;

    return (<div>
      <div>
        <h4 className={ item.purchased && 'strikethrough' } >{ item.name }</h4>
        </div>
        <form className="three columns" onSubmit={this.delete.bind(this) }>
          <button>&times;</button>
        </form>
      </div>)
  }
}

module.exports = GroceryItem;
