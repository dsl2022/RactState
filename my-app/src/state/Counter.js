import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0
  };
  //  constructor(props){
//    super(props)
//    this.state = {
//     count: 0
//   }
//     this.handleButtonClick=this.handleButtonClick.bind(this)
//  }

  handleButtonClick(){
    console.log(this.state.count);
  } 
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button
        onClick = {()=>this.handleButtonClick()}
        >
          Add 1
        </button>
      </div>
    )
  }
}

export default Counter