import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import { motion } from "framer-motion"

// declare animation/motion variants:
const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration : 1 }
    },
  }
class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <motion.div id="header" drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.7}>
                <h2>
                <a href="http://jessibewu.github.io/react-portfolio">
                    <span role="img">
                    <motion.img src="https://img.icons8.com/nolan/40/react-native.png" alt="icon" class="icon" id="r-icon"
                     variants={svgVariants}
                     initial="hidden"
                     animate="visible"/>
                    </span>
                    JW
                </a>
                </h2>
                
                <Navigation/>
                </motion.div>
    

            <div className="content">
                <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
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
 