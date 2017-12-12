var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx')

class GroceryItem extends React.Component {
  delete(e){
    e.preventDefault();
    action.delete(this.props.item);
  }

  togglePurchased(e){
    e.preventDefault();
    let item = this.props.item
    if(item.purchased){
      action.unbuy(item);
    }else{
      action.buy(item);
    }
  }


  render(){
    let item = this.props.item;

    return (<div className="grocery-item row">
      <div className="six columns">
        <h4 className={ item.purchased ? 'strikethrough' : "" } >{ item.name }</h4>
        </div>
        <form className="three columns" onSubmit={this.togglePurchased.bind(this) } >
          <button className={ item.purchased ? "" : "button-primary"}>
            { item.purchased ? "Unbuy" : "Buy"}
          </button>

        </form>
        <form className="three columns" onSubmit={this.delete.bind(this) }>
          <button>&times;</button>
        </form>
      </div>)
  }
}

module.exports = GroceryItem;
