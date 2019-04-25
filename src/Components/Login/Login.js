import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom'
import './css/style.css'

class Login extends Component {

    render(){
  
      return (
        <Fragment>

          <div className="py-5 row justify-content-center align-items-center full2">
          <div className="py-5 col-sm-12 col-md-8 col-lg-6">
                <div className="card py-5">
                    <div className="card-content center">
                        <p className="title"> Ingresar </p>
                        <p className="subtitle">Ingresa con tu cuenta de Google o Facebook</p>

                        <p className="pt-2">
                            <Link to="#" className="button is-warning is-fullwidth col-sm-12 col-md-8 col-lg-6 center noflex">
                                <span className="icon">
                                <i className="fab fa-facebook-square"></i>
                                </span>
                                <span>Ingresar con Facebook</span>
                            </Link>
                        </p>
                        <p className="pt-2">
                            <Link to="#" className="button is-warning is-fullwidth col-sm-12 col-md-8 col-lg-6 center noflex">
                                <span className="icon">
                                <i className="fab fa-google"></i>
                                </span>
                                <span>Ingresar con Google</span>
                            </Link>
                        </p>
                    </div>
                </div>
          </div>
          </div>

        </Fragment>
      );
    }
  }
  
  export default Login;