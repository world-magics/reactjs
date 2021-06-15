import React from 'react';
// import MyApp from './components/MyApp';
import './App.css';
// import Component1 from './propsTutorial/Component1';

// import Component2 from './propsTutorial/Component2';

// import Lesson1 from './stateLesson1/Lesson1';
// import Counter from './stateLesson1/Counter';
// import Lifecycle from './LifeCyclelesson/Lifecycle';
// import Backend from './APITutorial/Backend';
//import SassInReact from './SassTutoralInReact/SassInReact'
import About from './About'
import Blog from './Blog'
import Nav from './Nav'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SimpleChart from './Charts/SimpleCharts'
 
import SimpleState from './UseState/SimpleState'
import Effect from './UseEffect/Effectss'
// import Effectss from './UseEffect/Effectss';
import Modalss from './ModalVideo/Modalss'
import Hosting from './hostTutorial/Hosting';
function App() {
  return (
  
    <div className="App"> 
    {/* <MyApp /> */
//  <Counter/>
//  <Lifecycle/>

// <SassInReact/>
//<Modalss/> 

    }
    <Hosting/>

{/* <Nav/>
<SimpleChart/>
<Route  path="/blog" component={Blog}/>
<Route path="/about" component={About}/>
<Route exact path="/" component={Home}/> */}
{/* <Effectss/> */}

{/* <SimpleState/> */}
   
   {/* <Component1 name="Sherzod" age="24"/>,
      <Component2 text="React tutorial"/>
      <Lesson1/> */}
     
    </div>
  
  );
}
// const Home=()=>{
//   return(
//     // <div>
//     //   <h1>
//     //     Home
//     //   </h1>
//     //   <p>
//     //     This is Home page
//     //   </p>
//     // </div>
//   )
// }
export default App;
