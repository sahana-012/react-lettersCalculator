// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', lettersCount: 0}

  onChangeOfLetter = event => {
    const newTextCount = event.target.value.length
    this.setState({searchInput: event.target.value, lettersCount: newTextCount})
  }

  render() {
    const {searchInput, lettersCount} = this.state
    return (
      <div className="app-container">
        <div className="inner-container">
          <div className="text-content">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <label htmlFor="phrase" className="enter-phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phrase"
              className="input-text-container"
              placeholder="Enter the phrase"
              value={searchInput}
              onChange={this.onChangeOfLetter}
            />
            <div className="result-container">
              <p className="show-result">No.of letters: {lettersCount}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
