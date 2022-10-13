import './index.css'

const PasswordElement = props => {
  const {eachDetails, onDeletePassword, showPsw} = props
  console.log(showPsw)
  const onShowPsw = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-image"
    />
  )
  const {id, website, username, password} = eachDetails
  const onDelete = () => {
    onDeletePassword(id)
  }
  return (
    <li className="list-item">
      <div className="list-item-name-username-container">
        <p className="name-letter-image">{username[0].toUpperCase()}</p>
        <div>
          <p className="website-name-value">{website}</p>
          <p className="website-name-value">{username}</p>
          {showPsw ? (
            onShowPsw()
          ) : (
            <p className="plain-text-password">{password}</p>
          )}
        </div>
      </div>
      <button className="delete-btn" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordElement
