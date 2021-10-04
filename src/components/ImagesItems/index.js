import './index.css'

const ImagesItems = props => {
  const {eachthumbnail, onclickthumbnail} = props
  const {thumbnailUrl, id} = eachthumbnail
  const onclickthumnailimg = () => {
    onclickthumbnail(id)
  }
  return (
    <li className="thumbnailCon">
      <button
        type="button"
        className="thumb-button"
        onClick={onclickthumnailimg}
      >
        <img className="thumbnailImg" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImagesItems
