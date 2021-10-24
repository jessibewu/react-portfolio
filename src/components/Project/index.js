import React from 'react'; 

// Individual Card build-out using props
function ProjectCards(props) {
    return (
      <div className=" flex-row"> 
        <div className="img-container">
          <img alt={props.name} src={props.image} className="my-2" style={{ width: "70%" }} />
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p>
              <a href={props.github}><img src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="Repository" id="project-icon"/></a> 
              <a href={props.deploy}><img src="https://img.icons8.com/ios-glyphs/50/ffffff/open-in-browser.png" alt="Deployed Site" id="project-icon"/></a> 
              </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;