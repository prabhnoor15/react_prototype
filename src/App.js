import React ,  {Component} from 'react';
import logo from './logo.svg';
import Counters from '/home/noor/Downloads/first/src/counters'
import NavBar from '/home/noor/Downloads/first/src/navbar'
import './App.css';

class App extends Component {

  state = {

    counters:[
      {id : 1, value: 0},
      {id : 2, value: 0},
      {id : 3, value:0},
      {id : 4, value:0}
    ]
};

  handleincrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ... counter };
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters });
  };

  handleDelete = counterid => {
      const counters = this.state.counters.filter(c => c.id != counterid);
      this.setState({counters});
      console.log("event is czlled",counterid);
  };




render(){
  return (
    <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
      <Counters
          counters={this.state.counters}
          onIncrement = {this.handleincrement}
          onDelete={this.handleDelete}
          handleReset = {this.handleReset}
        />
    </main>
    </React.Fragment>
  );
}
}

export default App;
