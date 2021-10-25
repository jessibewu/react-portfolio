import React from 'react'; 
import { motion } from "framer-motion"

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">My Resume:</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="resume-p">
                <p>Full stack developer with experience of the MERN stack. Experienced in product management and software development. </p>
                <motion.p initial={{ x: -50 }} animate={{ x: 0 }}>
                Download my <a href="https://github.com/jessibewu/react-portfolio/raw/main/src/assets/Jessica%20Wu_software.pdf" class="link">resume</a>
                <br></br>
                </motion.p>
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