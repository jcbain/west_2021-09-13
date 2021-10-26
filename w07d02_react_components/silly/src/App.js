import './App.css';
import Header from './components/Header';
import { useState } from 'react';

// let count = 0;

function App() {
  // const state = useState(0)
  // const count = state[0];
  // const setCount = state[1]
  // console.log('state', state)
  
  // destructuring our return array
  const [ count, setCount ] = useState(0)

  const increment = () => {
    setCount(count + 1);
    console.log(count)
  }

  return (
    <div className="App">
      <h1>Component Based UIs with React</h1> 
      <p>the current count is {count}</p>
      <button onClick={increment}>increment the counter</button>
      {/* <Header /> */}
      <Header title="what does this do"/>
      <Header title="Lisa's Loveable Llama Lounge" someOtherProp={count}/>
      <Header title="Karl's Killer Kebab Kitchen"/>
      <Header title="Gorilla Sara's Glamourous Gargoyle Gymnasium" someOtherProp="what does this do"/>
      {/* <Header /> */}
    </div>
  );
}

// our JSX calls are just function calls
{/* <Header title="what does this do" someOtherProp={15} /> === Header({title: "what does this do", someOtherProp: 15})  */}





export default App;
