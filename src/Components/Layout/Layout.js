import React, {Fragment, Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './css/style.css'

 //components
import Index from '../Index/Index'
import Login from '../Login/Login'

class Layout extends Component {

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
    <nav className="navbar pt-2" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item" href="#!">
        <h1 className="title is-3">Fly Ninsha</h1>
      </Link>
  
      <Link to="#!" role="button" onClick={this.handleClick} className={"navbar-burger burger is-warning " + (this.state.open ? "is-active":"") } aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Link>
    </div>
  
    <div id="navbarBasicExample" className={"navbar-menu " + (this.state.open ? "is-active":"")}>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/login" className="button is-warning">
              <strong>Ingresar</strong>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div className="container">

    
    <Switch>
        <Route exact path="/" render={()=><Index/>} />
        <Route exact path="/login" render={()=><Login/>} />
    </Switch>
    

  </div>

        </Fragment>
      );
    }
  }
  
  export default Layout;