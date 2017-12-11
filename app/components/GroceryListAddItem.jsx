var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx')

class GroceryListAddItem extends React.Component {
  // static propTypes = {
  //    name: React.PropTypes.string.isRequired,
  //  };

   constructor(props) {
     super(props);
     this.state = {
       input: "",
     };
   }

  handleInputName(e){
    this.setState({
      input: e.target.value
    })
  }

  addItem(e){
    e.preventDefault();
    action.add({
      name: this.state.input
    })

    this.setState({
      input: ''
    })
  }

  render(){
    return (<div className="grocery-add-item">
        <form onSubmit={ this.addItem.bind(this) }>
          <input value={ this.state.input } onChange={ this.handleInputName.bind(this) }/>
          <button> Add item </button>
        </form>
      </div>)
  }
}
//);

module.exports = GroceryListAddItem;
