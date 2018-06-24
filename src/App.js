import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        item:null,
        data:["react", "redux", "node.js"]
      }
      this.handle=this.handle.bind(this),
      this.adddata=this.adddata.bind(this),
       this.removedata=this.removedata.bind(this)
  };
  handle(e){
  this.setState({item: e.target.value});
  }
  adddata(e)
  {  var array =[...this.state.data];
     array.push(e);
     this.setState({data:array});
  }
  removedata(e)
  {   
  }
  render() {
    return (
      <div className="App">
          <input className="input" placeholder="enter task.." type="text" value={this.state.item} onChange={this.handle}/>
          <button className="button" value="send" onClick={()=>this.adddata(this.state.item)}>add</button>
          {this.state.data.map((person, i) => <li key={i} className="list"> {<button className="Remove" onClick={this.removedata()}>remove</button>} {i} {person}  </li>)}
      </div>
    );
  }
}

export default App;
