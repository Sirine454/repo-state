import React from "react";
import "./App.css";
import InputForm from './component/FormInput'
import List from './component/List'



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      pendingItem: "",
      list: [],
    };
  }
  handleItemInput = e => {
    this.setState({ 
      pendingItem: e.target.value 
    });
  }
   newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };
  handleRemove = index => {
    const newState = this.state.list.filter(item => {
      this.state.list.indexOf(item) !== index
    });

    this.setState({ 
      list: newState
    });
  };

  render(){
  return (
    <div className="App">
      <p>To do List</p>
      <InputForm
          className="input"
          type="text"
          handleItemInput={this.handleItemInput}
          newItemSubmitHandler={this.newItemSubmitHandler}
          value={this.state.pendingItem}
          placeholder="Add an item"
        />
         
         <List list={this.state.list} />
    </div>
  );
}
}
export default App;
