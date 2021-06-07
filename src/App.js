import React from 'react';
// import MyApp from './components/MyApp';
import './App.css';
import Component1 from './propsTutorial/Component1';

import Component2 from './propsTutorial/Component2';
function App() {
  return (
    <div className="App"> 
    {/* <MyApp /> */

     
    }
     <Component1 name="Sherzod" age="24"/>,
      <Component2 text="React tutorial"/>
    </div>
  );
}

export default App;
