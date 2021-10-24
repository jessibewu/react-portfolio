import React from 'react';

function Footer() {   
    return (
    <div className="footer" id="footer">
        <div id="footer-icons">
        <a href="https://github.com/jessibewu"><img src="https://img.icons8.com/nolan/44/github.png" alt="Github" class="icon"/></a>
        <a href="https://www.linkedin.com/in/jessica-ying-en-wu-830859b7/"><img src="https://img.icons8.com/nolan/44/linkedin.png" alt="LinkedIn" class="icon"/></a>
        <a href="https://twitter.com/jessibewu"><img src="https://img.icons8.com/nolan/44/twitter-circled.png" alt="Twitter" class="icon"/></a>
        {/* <a href="https://stackoverflow.com/users/15901011/jessica-wu"><img src="https://img.icons8.com/ios-filled/50/ffffff/stackoverflow.png" alt="Stack Overflow" class="icon"/></a> */}
        </div>
        <h5>&copy; 2021 Jessica Wu  
        </h5>
    </div>
    )
}

export default Footer;