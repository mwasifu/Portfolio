import React from 'react'

import '../pages/Contact.css'

const Contact = () => {
    return (

        <div className="contact">
            <h1>Talk to me.</h1>
            <br />
            <br />
            <a className="tags" href = "mailto: mwasifu@outlook.com">Email Me</a>
            <br />
            <br />
            <h4 className="profile">Check out my profiles</h4>
            <br />
            <a className="tags" href="https://www.linkedin.com/in/mohammed-wasif-uddin-10b6b1201/">LinkedIn</a>
            <br />
            <br />
            <a className="tags" href="https://github.com/mwasifu?tab=repositories">Github</a>
            <br />
            <br />
            <h4>Follow me on  <a className="tags" href="https://www.instagram.com/mwasifu/"> Instagram </a></h4>
        </div>

    )
}

export default Contact
