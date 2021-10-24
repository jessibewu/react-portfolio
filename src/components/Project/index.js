import React from 'react'; 
import { motion } from "framer-motion"

// Individual Card build-out using props
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p>
              <a href={props.github}><motion.img whileHover={{ scale: 1.1 }} src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="Repository" id="project-icon"/></a> 
              <a href={props.deploy}><motion.img whileHover={{ scale: 1.1 }} src="https://img.icons8.com/ios-glyphs/50/ffffff/open-in-browser.png" alt="Deployed Site" id="project-icon"/></a> 
              </p>
        </div>
        <div className="img-container">
          <a href={props.image}>
          <img alt={props.name} src={props.image} style={{ width: "50%" }} />
          </a> <hr></hr>
        </div>
      </div>
    );
}
  
  export default ProjectCards;