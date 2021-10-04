import './style.css'

const Scorecard = props => {
  const {onclickPlayagain, score} = props
  const onclickplayButton = () => {
    onclickPlayagain()
  }
  return (
    <div className="scorecardbg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophyImg"
      />
      <p className="winscorelabel">YOUR SCORE</p>
      <p className="winscore">{score}</p>
      <button
        type="button"
        className="playaginbutton"
        onClick={onclickplayButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="replayImg"
        />{' '}
        PLAY AGAIN
      </button>
    </div>
  )
}
export default Scorecard
