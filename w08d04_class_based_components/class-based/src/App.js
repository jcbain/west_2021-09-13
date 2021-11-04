import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';

import ClassComponent from './components/ClassComponent';
import LifecycleComponent from './components/LifecycleComponent';


const randomValue = () => Math.floor(Math.random() * 256);

function App() {

  const [color, setColor] = useState(`rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`)
  const [bg, setBg] = useState(`rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`)
  
  const handleClick = () => {
    setColor(`rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`)
    setBg(`rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`)
  }
  return (
    <div className="App">
      <h1 style={{color: color, backgroundColor: bg}}>Some Clever Class-based Component Name</h1>
      <button onClick={handleClick}>Change color</button>
      <Router>
        <nav>
          <Link to="/classbased">class component</Link>
          <br />
          <Link to="/lifecycle">lifecycle component</Link>
        </nav>
        
        <Switch>
          <Route path="/classbased">
            <ClassComponent someProp="I am just a cool prop"/>
          </Route>
          <Route path="/lifecycle">
            <LifecycleComponent />
          </Route>

        </Switch>

      </Router>
   </div>
  );
}

export default App;
