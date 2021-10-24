import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">My Resume:</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                <p>Full stack developer with experience of the MERN stack. Experienced in product management and software development. </p>
                <p class="mt-5">
                <a href="https://www.linkedin.com/in/jessica-ying-en-wu-830859b7/"><img src="https://img.icons8.com/ios-glyphs/50/ffffff/linkedin.png" alt="Jessica Wu LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="/" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="skills">
                <h2>Frontend/Backend Skills:</h2><hr></hr>
                <img src="https://img.icons8.com/material-outlined/54/ffffff/html.png" alt="html logo"/>
                <img src="https://img.icons8.com/material-outlined/48/ffffff/css-filetype.png" alt="css logo"/>
                <img src="https://img.icons8.com/ios-filled/45/ffffff/javascript-logo.png" alt="js logo"/>
                <img src="https://img.icons8.com/ios-filled/47/ffffff/jquery.png" alt="jquery logo"/>
                <img src="https://img.icons8.com/ios-glyphs/50/ffffff/react.png" alt="react.js logo"/>
                <img src="https://img.icons8.com/windows/56/ffffff/nodejs.png" alt="nodejs logo"/> 
                <img src="https://img.icons8.com/windows/52/ffffff/mysql.png" alt="mysql logo"/>
                <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/api-settings.png" alt="api logo"/>
            </div>
        </div>
</section>
);
}

export default Resume;