import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

class App extends Component{
  state = {
    walletInfo: {}
  }

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
    .then((response) => response.json())
    .then(json => this.setState({ walletInfo: json }))
  }

  render() {
    const { address, balance } = this.state.walletInfo;
    return (
      <div className='App'>
        <div style={{ fontSize: '64px' }}><b>NotBitcoin</b></div>
        <br />
        <div style={{ display:'flex', flexDirection: 'column' }}>
          <div>
            <Link to='/Blocks'>View NotBitcoin</Link>
            <br />
            <br />
          </div>
          <div>
            <Link to='/conduct-transaction'>Create Transaction</Link>
            <br />
            <br />
          </div>
          <div>
            <Link to='/transaction-pool'>Transaction Pool</Link>
          </div>
        </div>
        <br />
        <div className='walletInfo'>
          <div><b style={{ fontSize: '32px' }}>Address:</b><br /> {address}</div><br /><br />
          <div><b style={{ fontSize: '32px' }}>balance:</b><br /> {balance}</div>
        </div>
      </div>
    )
  }
}

export default App;