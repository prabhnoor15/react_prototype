import React, {Component} from 'react';
import Counter from '/home/noor/Downloads/first/src/counter'


export default class Counters extends Component {

  render(){
    // here we are mapping various objects which are counters.we have a array of 4 objects.
    const {handleReset , onIncrement , onDelete} = this.props;
    return(
      <div>
        <button onClick={handleReset} className="btn btn-primary btn-sm m-2"> Reset </button>
        {this.props.counters.map(counter => (<Counter key={counter.id} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter = {counter}>
          <h4> this is a title</h4>
          </Counter>
  ))}

      </div>
    )
  }

}
