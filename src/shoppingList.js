import React from "react";
  
  class ShoppingList extends React.Component {
    constructor(props) {
      const { items } = props;
      super(props);
      this.state = { items };
      this.removeItem = this.removeItem.bind(this);
    }

    removeItem(id) {
      function find(items) {
          //items should be the above parameter
          return items.id !== id
          //should be id not this.state.items.id
      }
       const newItems = this.state.items.filter(find)
       // find does not need a parameter
       this.setState({items: newItems})
       // ran out of time before I could type {items: newItems}
    }
  
    render() {
      return(     
        <ul>
          { this.state.items.map( item =>
              <li key={item.id}> {item.name} 
                  <button id="removeBtn"
                          onClick={() => this.removeItem(item.id)} 
                          type="button" >Remove</button>
              </li>
            )}
        </ul>
      );
    }
  } 
  
  export default ShoppingList