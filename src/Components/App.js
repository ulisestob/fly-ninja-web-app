import React, {Fragment, Component} from 'react';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { open : false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ open : !this.state.open })
  }

  render(){

    return (
      <Fragment>
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
    </a>

    <a href="#!" role="button" onClick={this.handleClick} className={"navbar-burger burger " + (this.state.open ? "is-active":"") } aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={"navbar-menu " + (this.state.open ? "is-active":"")}>
    <div className="navbar-start">
      <a href="#!" className="navbar-item">
        Home
      </a>

      <a href="#!" className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a href="#!" className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a href="#!" className="navbar-item">
            About
          </a>
          <a href="#!" className="navbar-item">
            Jobs
          </a>
          <a href="#!" className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a href="#!" className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="#!" className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="#!" className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
      </Fragment>
    );
  }
}

export default App;
