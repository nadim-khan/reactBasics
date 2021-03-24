import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/MyStyles.css";
import styles from "./components/MyStyles.module.css";
 import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import KeyIndex from './components/KeyIndex';
import Stylesheet from './components/stylesheet';
import Forms from './components/Forms';
import Lifecycle from './components/Lifecycle';
import Fragment from "./components/advance/Fragment";
import RegularParent from "./components/advance/RegularParent";
import Refs from './components/advance/Refs'
import FWDRefParent from './components/advance/FWDRefParent'
import Portal from './components/advance/Portal'
import ErrorBoundary from './components/advance/ErrorBoundary'
import SuperHero from './components/advance/SuperHero'
import HighrOrder from './components/advance/HighrOrder'
import RenderProps from './components/advance/RenderProps'
import RenderPropsFunc from './components/advance/RenderPropsFunc'
import ParentCompA from './components/Context/ParentCompA'
import { UserProvider } from "./components/Context/UserContext";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Concepts</h1>
          <fieldset>
            <h2 className={styles.basics}>Basic React JS</h2>
            <Greet name="Nadeem" post="Software Developer"></Greet>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Welcome name="My React App"></Welcome><hr/>
                <Message/><hr/>
                <Greet name="Nadeem" post="Software Developer">
                  <p className="postClass"> Developer of this app</p>
                </Greet><hr/>
                <Greet name="Vivek" post="Researcher">
                <br/> <button>Action</button>
                </Greet><hr/>
                <Greet name="Sukant" post="Python Developer"/><hr/>
            <Counter/><hr/>
            <FunctionClick></FunctionClick><hr/>
            <EventBind/><hr/>
            <ParentComponent></ParentComponent><hr/>
            <ConditionalRendering></ConditionalRendering><hr/>
            <ListRendering></ListRendering><hr/>
            <KeyIndex/><hr/>
            <Stylesheet primary={true}/><hr/>
            <Forms/><hr/>
            <Hello /><hr/>
            <Lifecycle/>
          </fieldset>
          <fieldset>
            <h2 className={styles.advanced}>Advanced React JS</h2><hr/>
            <Fragment /><hr/>
            <RegularParent/><hr/>
            <Refs/><hr/>
            <FWDRefParent/><hr/>
            <Portal/><hr/>
            <ErrorBoundary>
              <SuperHero heroName ='Spiderman'/>
            </ErrorBoundary>
            <ErrorBoundary>
              <SuperHero heroName ='Superman'/>
            </ErrorBoundary>
            {/* <ErrorBoundary>
              <SuperHero heroName ='joker'/>
            </ErrorBoundary><hr/> */}<hr/>
            <HighrOrder user="Nadeem"/><hr/>
            <RenderPropsFunc render={(count,incrementCounter, hoverCount,incrementHover)=>
              <RenderProps 
                count={count}
                incrementCounter={incrementCounter}
                hoverCount={hoverCount}
                incrementHover={incrementHover}/>
            }/><hr/>
            <UserProvider value="Nadeem Khan">
              <ParentCompA/>
            </UserProvider>
            
            
          </fieldset>
        </header>
      </div>
    );
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
