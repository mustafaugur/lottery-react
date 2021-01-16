import React from 'react';
import './App.css';
import web3 from './web3';
import lottery  from "./lottery";


class App extends React.Component {


  // web3.eth.getAccounts().then( accounts => {
  //   console.log(accounts);
  // })



  constructor (props) {
    super(props);
    this.state =  {manager : ''};
  }

  async componentDidMount() {

      const accounts = await web3.eth.getAccounts();
      console.log('accounts:', accounts[0]);


      const manager = await lottery.methods.manager().call();

      this.setState({manager});
  }
  // console.log("mugur web3 version", web3.version);

  // web3.eth.getAccounts().then( console.log);
  
  render(){
    return (
      <div>
        <h2>Lottery contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}


export default App;
