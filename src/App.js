import React from 'react';
// import logo from './logo.svg';
import './App.css';
//  import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
//import Hello from './components/Hello';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
//import ConditionalRendering from './components/ConditionalRendering';
//import ListRendering from './components/ListRendering';
// import KeyIndex from './components/KeyIndex';
import Stylesheet from './components/stylesheet';



class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
      {/* <Greet name="Nadeem" post="Software Developer"></Greet> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
          <Welcome name="My React App"></Welcome>
          <Message/>
        <Greet name="Nadeem" post="Software Developer">
          <p className="postClass"> Developer of this app</p>
        </Greet>
        <Greet name="Vivek" post="Researcher">
         <br/> <button>Action</button>
        </Greet>
        <Greet name="Sukant" post="Python Developer"/> */}
        {/* <Counter/> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <EventBind/> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <ConditionalRendering></ConditionalRendering> */}
        {/* <ListRendering></ListRendering> */}
        {/* <KeyIndex/> */}
        <Stylesheet primary={true}/>
        
        {/* <Hello /> */}
      </header>
    </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My First ReactApp
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
