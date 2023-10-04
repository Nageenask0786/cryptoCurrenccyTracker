// Write your code here
import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div>
        <h1>cryptoCurrency Tracker</h1>
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
