import React, {Component, Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './Index/Index'
import Layout from './Layout/Layout';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Layout}/>
                    <Route exact path="/login" component={Layout}/>
                </Switch>
            
            </BrowserRouter>
        )
    }
}

export default App