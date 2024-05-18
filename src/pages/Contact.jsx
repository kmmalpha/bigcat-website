import React from "react";
import './styles/Contact.css'

const Contact = () => {
    return (
        <div  className="main-content">
            <div className="contact-page">
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p><strong>Email:</strong> bigcatgraphics@gmail.com</p>
                    <p><strong>WhatsApp:</strong> (+27) 71 914 2461</p>
                    <p><strong>Instagram:</strong><a href="https://www.instagram.com/bigcatgraphics/" target="_blank" rel="noreferrer"> @bigcatgraphics</a></p>
                    <p><strong>Facebook:</strong><a href="https://web.facebook.com/BigCatGraphics" target="_blank" rel="noreferrer">Big Cat Graphics</a></p>
                </div>

                <div className="contact-form">
                    <h2>If you'd like us to contact you directly, you can fill in below</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname: </label>
                            <input type="text" id="surname" name="surname" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message: </label>
                            <input type="message" id="message" name="message" required />
                        </div>
                        <button >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;