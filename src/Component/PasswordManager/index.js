import {Component} from 'react'
import {v4} from 'uuid'
import PasswordElement from '../PasswordElement'
import NoPswElement from '../NoPswElement'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordDetailsList: [],
    website: '',
    username: '',
    password: '',
    searchText: '',
    showPsw: true,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newDetails = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordDetailsList: [...prevState.passwordDetailsList, newDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  onWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChnage = event => {
    this.setState({password: event.target.value})
  }

  onSearch = event => {
    this.setState({searchText: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({showPsw: !prevState.showPsw}))
  }

  onDeletePassword = id => {
    this.setState(prevState => ({
      passwordDetailsList: prevState.passwordDetailsList.filter(
        eachListItem => eachListItem.id !== id,
      ),
    }))
  }

  getListItem = filteredPasswordDetailsList => {
    const {showPsw} = this.state
    return filteredPasswordDetailsList.map(eachDetails => (
      <PasswordElement
        key={eachDetails.id}
        eachDetails={eachDetails}
        onDeletePassword={this.onDeletePassword}
        showPsw={showPsw}
      />
    ))
  }

  render() {
    const {
      passwordDetailsList,
      website,
      username,
      password,
      searchText,
      showPsw,
    } = this.state

    const filteredPasswordDetailsList = passwordDetailsList.filter(
      eachPswList =>
        eachPswList.website.toLowerCase().includes(searchText.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="contain-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="input-container">
            <form
              className="password-form-container"
              onSubmit={this.onFormSubmit}
            >
              <h1 className="form-heading">Add New Password</h1>
              <div className="website-input-container">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="website-img"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  onChange={this.onWebsiteChange}
                  value={website}
                />
              </div>
              <div className="website-input-container">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="website-img"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  onChange={this.onUsernameChange}
                  placeholder="Enter Username"
                  className="input"
                  value={username}
                />
              </div>
              <div className="website-input-container">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="website-img"
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  onChange={this.onPasswordChnage}
                  placeholder="Enter Password"
                  className="input"
                  value={password}
                />
              </div>
              <div className="add-btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
            <div className="password-manager-image-container">
              <img
                className="password-manager-image-lg"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
              <img
                className="password-manager-image-sm"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
          </div>
          <div className="password-container">
            <div className="your-password-section">
              <div className="your-password-section-a">
                <h1 className="your-password-header-text">Your Passwords</h1>
                <p className="password-count">
                  {filteredPasswordDetailsList.length}
                </p>
              </div>
              <div className="your-password-section-b">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-image"
                  alt="search"
                />
                <input
                  type="search"
                  onChange={this.onSearch}
                  className="search-input"
                  placeholder="Search"
                  value={searchText}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="show-password-container">
              <input
                value={showPsw}
                onChange={this.onChecked}
                id="checkbox"
                type="checkbox"
              />
              <label className="checkbox-label" htmlFor="checkbox">
                Show passwords
              </label>
            </div>
            <ul className="list-item-container">
              {filteredPasswordDetailsList.length !== 0 ? (
                this.getListItem(filteredPasswordDetailsList)
              ) : (
                <NoPswElement />
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
