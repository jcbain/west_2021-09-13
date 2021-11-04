import { Component } from "react"

class ClassComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      name: "James"
    }

    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState({counter: this.state.counter + 1})
  }



  render(){
    return (
      <section>
        <h2>our class-based component</h2>
        <p>{this.props.someProp}</p>
        <p>The name is {this.state.name}</p>
        <p>the current count of the counter is {this.state.counter}</p>
        <button onClick={this.increment}>increment counter by one</button>
      </section>
    )
  }
}



export default ClassComponent;