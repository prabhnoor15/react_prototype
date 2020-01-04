import React, {Component} from 'react';

export default class Counter extends Component {


  styles ={
    fontSize:30,
    fontWeight:"bold"
  };

//arrow function allow us to skip the return statement and skip to write functiion . it makes writing code easier.


  render(){
    // In javascript in return function has nothing infant of it , then javascript will put a ; in front of it. When writing more than one elements in jsx , use div.

    //return <h1> HEllo World </h1>;

    //In javascrioopt always do “ return (); “. 'badge badge-primary m-2' this is basically refernce to bootstrap
    //'badge badge-primary m-2' this is basically refernce to bootstrap

    //in these {} curly braces we can write any valid javascript expression . Expression is something which produces a value.
    // this is another way of defining the style attribute

    console.log("props",this.props);
    return (
      //we can also use <div>
      <React.Fragment>
        {this.props.children}

      <span style= {this.styles} className={this.getBadgeClasses()}>{this.formatcount()}</span>
      <button onClick={() => this.props.onIncrement(this.props.counter)}  style= {{fontSize:20}} className= "btn btn-secondary btn-sm m-2"> Increment </button>
      <button onClick={() => this.props.onDelete(this.props.counter.id)}  style= {{fontSize:20}} className= "btn btn-danger btn-sm m-2"> Delete </button>
      </React.Fragment>
    );
  }



  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    // this is basically a shortcut and better method for using bootstrap.
    //here we will check if count == 1 or 0 and change the styling accordingly i.e.
    // we change the bootstrap styling accordingly.

    classes += this.props.counter.value === 0? "warning":"primary";
    return classes;
  }

  formatcount(){
    //this means we are extracting the count property from state and storing it in a variable.
    const { value } = this.props.counter;
    return value === 0 ? 'ZERO' : value;
  }
}

// we can create a class and export it on the same line or we can create a class and export it on a different line
//export default Counter;
