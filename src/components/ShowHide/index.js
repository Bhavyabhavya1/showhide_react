// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isClicked1: false, isClicked2: false}

  firstName = () => {
    this.setState(prevState => ({isClicked1: !prevState.isClicked1}))
  }

  lastName = () => {
    this.setState(prevState => ({isClicked2: !prevState.isClicked2}))
  }

  render() {
    const {isClicked1, isClicked2} = this.state
    let div1
    let div2
    if (isClicked1) {
      div1 = <p className="container1">Joe</p>
    }
    if (isClicked2) {
      div2 = <p className="container1">Jonas</p>
    }
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="container2">
            <div>
              <button type="button" onClick={this.firstName}>
                Show/Hide Firstname
              </button>
              {div1}
            </div>
            <div>
              <button type="button" onClick={this.lastName}>
                Show/Hide LastName
              </button>
              {div2}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
