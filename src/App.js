import React from 'react';
// import MyApp from './components/MyApp';
import './App.css';
import Component1 from './propsTutorial/Component1';

import Component2 from './propsTutorial/Component2';

import Lesson1 from './stateLesson1/Lesson1';
import Counter from './stateLesson1/Counter';
import Lifecycle from './LifeCyclelesson/Lifecycle';
function App() {
  return (
    <div className="App"> 
    {/* <MyApp /> */
//  <Counter/>
 <Lifecycle/>
     
    }
     {/* <Component1 name="Sherzod" age="24"/>,
      <Component2 text="React tutorial"/>
      <Lesson1/> */}
     
    </div>
  );
}

export default App;
