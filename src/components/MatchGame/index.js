import {Component} from 'react'

import ImagesItems from '../ImagesItems'
import TabItems from '../TabItems'
import Scorecard from '../Scorecard'

import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {
    selectedTab: tabsList[0].tabId,
    bigImageIndex: 0,
    score: 0,
    time: 60,
    isGameRunning: true,
  }

  componentDidMount() {
    this.stratingintervalId()
  }

  componentWillUnmount() {
    this.clearTimeInteraval()
  }

  clearTimeInteraval = () => clearInterval(this.IntervalId)

  decreasingTime = () => {
    const {time} = this.state
    if (time === 0) {
      this.clearTimeInteraval()
      this.setState(prevstate => ({isGameRunning: !prevstate.isGameRunning}))
    } else {
      this.setState(prevstate => ({time: prevstate.time - 1}))
    }
  }

  stratingintervalId = () => {
    this.IntervalId = setInterval(this.decreasingTime, 1000)
  }

  onclickPlayagain = () => {
    this.clearTimeInteraval()
    this.componentDidMount()
    this.setState({
      selectedTab: tabsList[0].tabId,
      bigImageIndex: 0,
      score: 0,
      time: 60,
      isGameRunning: true,
    })
  }

  onclicktabid = tabId => {
    this.setState({selectedTab: tabId})
  }

  onclickthumbnail = id => {
    const {imagesList} = this.props
    const {bigImageIndex} = this.state
    if (imagesList[bigImageIndex].id === id) {
      const indexis = Math.floor(Math.random() * imagesList.length - 1)
      this.setState(prevstate => ({
        bigImageIndex: indexis,
        score: prevstate.score + 1,
      }))
    } else {
      this.setState(prevstate => ({isGameRunning: !prevstate.isGameRunning}))
      this.clearTimeInteraval()
    }
  }

  filterimageslist = imagesList => {
    const {selectedTab} = this.state
    const resultsitems = imagesList.filter(
      eachone => eachone.category === selectedTab,
    )
    return resultsitems
  }

  render() {
    const {selectedTab, score, time, isGameRunning, bigImageIndex} = this.state
    const {imagesList} = this.props
    const imagesListResults = this.filterimageslist(imagesList)
    return (
      <div className="appContainer-bg">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="websitelogo"
          />
          <ul className="score-timer-container">
            <li className="score">
              <p>
                Score: <span className="sapnstyle">{score}</span>
              </p>
            </li>
            <img
              className="timerimg"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <li className="sapnstyle">
              <p>{time} sec</p>
            </li>
          </ul>
        </nav>

        {isGameRunning ? (
          <div className="matchgamecontainer">
            <div className="matchImagecon">
              <img
                src={imagesList[bigImageIndex].imageUrl}
                alt="match"
                className="matchImage"
              />
            </div>
            <ul className="tabscontainer">
              {tabsList.map(eachtabsList => (
                <TabItems
                  eachtabsList={eachtabsList}
                  key={eachtabsList.tabId}
                  isTabSelected={selectedTab === eachtabsList.tabId}
                  onclicktabid={this.onclicktabid}
                />
              ))}
            </ul>
            <ul className="thumbnailscontainer">
              {imagesListResults.map(eachthumbnail => (
                <ImagesItems
                  eachthumbnail={eachthumbnail}
                  key={eachthumbnail.id}
                  onclickthumbnail={this.onclickthumbnail}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="scorecardcontainer">
            <Scorecard score={score} onclickPlayagain={this.onclickPlayagain} />
          </div>
        )}
      </div>
    )
  }
}
export default MatchGame
