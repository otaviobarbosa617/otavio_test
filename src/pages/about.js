import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => (
    <Layout>
        <SEO title='About' />
        <Container fluid="md">
            <h4>Hi There!</h4>
            <hr></hr>
            <p class="text-justify">My name is Otavio Anacleto Barbosa, and I'm a Toronto-based (PROUDLY since 2019) professional wedding and events photographer specialized in candid photos and storytelling with a photojournalistic approach.</p>
            <StaticImage src="../images/about/OtavioBarbosaPhotographer.jpeg" alt="Otavio Barbosa Photographer" height={400}></StaticImage>
            <p><small>Hi, this is me holding an analog camera.</small></p>
            <p class="text-justify">Does it mean that I don't shoot portraits or posed portraits of you and your family? Not at all! You'll definitely have those! And I think that they're a staple of your event but I'll always try my best to deliver the unexpected in your photos gallery. </p>
            <p class="text-justify">Hiring me you don't have to get worried about choosing a limited number of edited photos. Everything that I have edited is yours! No more of that "you can only choose 50 of these 400". </p>
            <p class="text-justify">I usually work solo, like 75% of the time, but when needed, my wife Luciane is the one that goes along with me to be my second shooter, and we become a lovely duo of photographers!</p>
            <StaticImage src="../images/about/Otavio&Luciane.jpeg" alt="Otavio Barbosa Photographer" height={400}></StaticImage>
            <p><small>Our dinamic duo getting ready to photograph another beautiful couple on their happy day.</small></p>
        </Container>

    </Layout>
)

export default About;