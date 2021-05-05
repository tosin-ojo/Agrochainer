import { GitHub, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import './Contact.css'

function Contact() {
    const history = 'useHistory'

    return (
        <div className="contact">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gLhSzruaOtR0oXmlcg9-6yRMa0F8etvY3Q4iF2vx3dxANLPqdl25aIJ54fClCMSYog&usqp=CAU" 
              alt=""
            />
            <main className="contact__body">
                <div className="contact__about">
                    <p>
                        Hello, we are eager to hear from you, message us below.
                    </p>
                </div>
                <form>
                    <h3>Contact Us</h3>
                    <label>
                        <span>Your Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Your Message</span>
                        <textarea />
                    </label>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
                <div className="contact__icons">
                    <Twitter style={{marginRight: '10px'}} onClick={() => history.push('https://www.twitter.com/t0sin0j0')} />
                    <GitHub style={{marginRight: '10px'}} onClick={() => history.push('https://github.com/Tosin-Ojo')} />
                    <LinkedIn onClick={() => history.push('https://www.linkedin.com/in/oluwatosin-adebayo-5b34831a6/')} />
                </div>
            </main>
        </div>
    )
}

export default Contact
