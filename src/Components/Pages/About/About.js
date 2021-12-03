import React from 'react';
import Footer from '../../Footer/Footer';
import NavBar from '../../Navbar/navbar';
import './About.css';

function About() {
  return (
    <div>
        <NavBar />
        <div className="About-Container">
            <div className="AboutInfo">
                <h1>( Lo-oK )</h1>
                <p>Lo-oK offers a unique experience for you, by providing the best fast, secure internet surfing.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About