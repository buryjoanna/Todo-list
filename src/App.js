import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItems from "./ListItems";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faSquareCheck)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        completed: false,
      },
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
    this.completeItem = this.completeItem.bind(this)
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !==key)
      this.setState({
        items:filteredItems
      })
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        completed: false
      },
    });
  }

  completeItem(key) {
    console.log('Complete item', key)
    const currentItem = this.state.find()
    this.setState({...this.state, currentItem: {...this.state.currentItem, completed: true}});
  }
  strikeThrough(){
    
  }
  

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Add a new task:"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>
          <ListItems items = {this.state.items}
          deleteItem ={this.deleteItem}
          completeItem={this.completeItem}
          ></ListItems>
        </header>
      </div>
    );
  }
}

export default App;
