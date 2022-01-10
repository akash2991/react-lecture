import './App.css';
// import { Hello } from './Hello'
import { TodoList } from './TodoList/TodoList';
import { Fragment } from 'react'
import { Counter } from './counter';
import { Chess } from './Chess/Chess';


function App() {


  const CounterComponent = Counter() /// you will get React's component here and not html


  return (
    <div className='App'>
      <TodoList />
      {/* <Hello firstName="rahul" lastName="gupta" prefix="Mr." /> */}


      {/* <Hello firstName="akash" lastName="agarwal" age={28}/> */}

      {/* <Counter /> */}
      {/* {CounterComponent} */}

      {/* <Chess/> */}

    </div>
  );
}

export default App;


/**
 * javascript's function
 * 1. it starts with small letter
 * 2. they can return any thing (data type, null , undefined, another function)
 * 3. we call it like this => sum()
 * 
 * 
 * react components = they are functions
 * 1. they start with capital letters (so that react can differentiate bw normal and react function)
 * 2. they return two things => either JSX or null
 * 3. we call them using angled brackets =>  <Hello /> (it is a convention)
 * 4. the function gets data as an object
 */
























