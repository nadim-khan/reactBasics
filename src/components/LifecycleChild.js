import React, { Component } from "react";

export class LifecycleChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "No Surname",
      stateVal: [{ msg: "Hello" }],
    };
    console.log("[Child] constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" [Child] lifecycle getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    // 6+233-3
    console.log("[Child] Did mount called");
  }

  //Update Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Child] [Update] shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Child] [Update] getSnapshotBeforeUpdate called");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Child] [Update] getSnapshotBeforeUpdate called");
  }
  
  changeName(){
    this.setState({
      name:'Nadeem'
    })
  }
  render() {
    console.log("[Child] render called");
    return (
      <div>
        <h1>Lifecycle Child Methods</h1>
        <h3 className='secondary'> {this.state.name}</h3>
        <button onClick={()=>{this.props.changeSurnameH(); this.changeName()}}>Update Surname</button>
      </div>
    );
  }
}

export default LifecycleChild;
