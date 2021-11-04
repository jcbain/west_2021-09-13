import { Component } from "react";

class LifecycleComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      interval: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({searchTerm: event.target.value})
  }

  componentDidMount(){
    console.log('%c The component mounted', 'color: lightblue;');
    // axios.get()

    const interval = setInterval(() => {
      console.log('the interval is running')
    }, 500)

    this.setState({interval: interval})
    
  }

  componentDidUpdate(prevProps, prevState){
    // console.log('prevState', prevState)
    // if(prevProps.userId !== this.props.userId){
    //   axios.get(`/api/users/${this.props.userId}`)
    // }

    console.log('%c the component has changed', 'color: yellow;')
  }

  componentWillUnmount(){

    // clean up happens here
    console.log('our component is about to unmount');
    clearInterval(this.state.interval)

  }

  render(){
    return (
      <section>
        <h2>Lifecycle Component</h2>
        <p>the current search term is {this.state.searchTerm}</p>
        <input
          value={this.state.searchTerm}
          onChange={this.handleChange} 
        />
      </section>
    )
  }
}

export default LifecycleComponent;