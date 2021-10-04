import './index.css'

const TabItems = props => {
  const {eachtabsList, isTabSelected, onclicktabid} = props
  const {tabId, displayText} = eachtabsList
  const onclicktab = () => {
    onclicktabid(tabId)
  }
  const tabButtonStyle = isTabSelected ? 'tabButton tabstyle' : 'tabButton'
  return (
    <li className="tabCon">
      <button type="button" className={tabButtonStyle} onClick={onclicktab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
