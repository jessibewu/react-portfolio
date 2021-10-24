import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <h2>
                <a href="http://jessibewu.github.io/react-portfolio">
                    <span role="img">
                    <img src="https://img.icons8.com/nolan/40/react-native.png" alt="icon" class="icon" id="r-icon"/>
                    </span>
                    JW
                </a>
                </h2>
                
                <Navigation/>
            </div>
    

            <div className="content">
                <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </HashRouter>
    )
}
}

export default Header;