import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const Contact = () => (
    <Layout>
        <SEO title="Contact"></SEO>
        <Container fluid="md">
        <h4>Let's talk!</h4>
        <hr></hr>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <p>Want to get a quote? Let's keep the conversation going! Just fill the form bellow:</p>
                <p>
                    <label>First Name: <input type="text" name="first_name" required /></label>   
                </p>
                <p>
                    <label>Last Name: <input type="text" name="last_name" required /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" placeholder="youremail@email.com" required /></label>
                </p>
                <p>
                    <label>Your phone: <input type="tel" name="phone_number" placeholder="123-456-6789" /></label>   
                </p>
                <p>
                    <label>Your Event: <select name="typeOfEvent[]" multiple required>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagment">Engagment</option>
                    <option value="Mitzvah">Bar/Bat Mitzvah</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Party">Party</option>
                    <option value="Corporate">Corporate Event</option>
                    </select></label>
                </p>
                <p>
                    <label>Date: <input type="date" name="date"/></label>   
                </p>
                <p>
                    <label>Time: <input type="time" name="time"/></label>   
                </p>
                <p>
                    <label>Address: <input type="text" name="address" /></label>   
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                    <button type="reset">Reset</button>
                </p>
            </form>
        </Container>
        <hr></hr>
        <Container fluid="md">
            <h5>Contact-me:</h5>
            <br></br>
            <p>Otavio Anacleto Barbosa</p>
            <p>Photographer</p>
            <p>English, Portuguese</p>
            <p><b>T:</b> +1 647-562-3407</p>
            <p><b>E:</b> <a href="mailto:otavio@otaviophoto.com" target="_blank" rel="noreferrer" onClickCapture={emailAlert} >otavio@otaviophoto.com</a></p>
            <p></p>
        </Container>
        <hr></hr>
        <Container fluid="md">
            <h5>Social Media Links:</h5>
        </Container>
        <hr></hr>
        <Container fluid="md">
            <h5>Reviews from past clients:</h5>
            <a href="https://www.weddingwire.ca/wedding-photography/otavio-photo--e56457" rel="noreferrer" target="_blank">
            <StaticImage src="../images/WeddingWire-ClientReviews-Otavio.png" alt="WeddingWire - Clients Reviews"></StaticImage></a>
            <p>You can also book me through: <a href="https://www.weddingwire.ca/wedding-photography/otavio-photo--e56457" rel="noreferrer" target="_blank"><img src="https://cdn1.weddingwire.ca/assets/img/logos/gen_logoHeader.svg" height="20" alt="WeddingWire Logo"/></a></p>
            
            <a href="https://www.gigsalad.com/otavio_photo_boston" rel="noreferrer" target="_blank">
            <StaticImage src="../images/GigSalad-ClientReviews-Otavio.png" alt="GigSalad - Clients Reviews"></StaticImage></a>
            <p>You can also book me through: <a href="https://www.gigsalad.com/otavio_photo_boston" rel="noreferrer" target="_blank"><img src="https://cress.gigsalad.com/images/svg/standalone/promokit-links/book-securely/book-securely.svg" alt="Hire me on GigSalad" height="70" width="210" /></a></p>
        </Container>
        <br></br>
    </Layout>
)
export default Contact

const emailAlert = () => {
    alert("Hey, let me tell you that I don't give quotes when you shoot me a direct email or text or call, please use the contact form on top of this page");
}
