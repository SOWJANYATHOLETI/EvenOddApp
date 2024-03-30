// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementNumber = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="component-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {displayText}</p>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onIncrementNumber}
            >
              Increment
            </button>
          </div>
          <p className="app-description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
