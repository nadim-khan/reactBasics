import React, { Component } from "react";
import LifecycleChild from './LifecycleChild';
import './MyStyles.css'

export class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "No Name",
      surname:'No Surname',
      stateVal: [{ msg: "Hello" }],
    };
    console.log('[Parent] constructor called')
    
  }

  static getDerivedStateFromProps(props,state){
      console.log('[Parent] lifecycle getDerivedStateFromProps')
      return null;
  }

  componentDidMount(){
    // const newState = [...this.state.stateVal,{ msg:'Did mount called' } ];
    // this.setState({
    //     stateVal: newState,
    // });
      console.log('[Parent] Did mount called')
  }
//Update Phase
  shouldComponentUpdate(nextProps,nextState){
      console.log('[Parent] [Update] shouldComponentUpdate called');
      return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Parent] [Update] getSnapshotBeforeUpdate called');
    return null;
  }
  componentDidUpdate(prevProps,prevState,snapshot) {
    console.log('[Parent] [Update] getSnapshotBeforeUpdate called');
  }
  changeName(){
    this.setState({
      name:'Nadeem'
    })
  }
  changeSurname(){
    this.setState({
      surname:'Khan'
    })
   }

  render() {
      console.log('[Parent] render called')
    return (
      <div>
        <h1>Lifecycle Methods</h1>
        <h3 className='secondary'> {this.state.name} - {this.state.surname}</h3>
        <button onClick={()=>this.changeName()}>Update Name</button>
        <hr/>
        <LifecycleChild changeSurnameH={()=>this.changeSurname()}></LifecycleChild>
      </div>
    );
  }
}

export default Lifecycle;
