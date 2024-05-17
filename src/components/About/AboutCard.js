import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sapna Kumari </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing BTECH in Computer science and engineering along with the specialization in <span className="purple">Machine Learning</span> at <span className="purple">CMR GROUP OF INSTITUTIONS</span> .
            <br />
           
            <br />
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />   I am a Passionate <span className="purple">programmer</span> and a <span className="purple">Web developer</span> dedicated to 
            crafting exceptional digital experiences. My expertise in coding and 
            commitment to quality define my approach to every project..
              <br/>
              <br/>
            </li>
            <li className="about-activity">
              <ImPointRight />  I am enthusiastic about  <span className="purple">Problem Solving </span>,I have solved more than 500 problems in <span className="purple">Leetcode </span> and more than 1400 problems across various platform.
          
          <br />
          <br/>
            </li>
            <li className="about-activity">
              <ImPointRight />  My field of Interest lies in problem Solving , Web technologies and also in areas related to <span className="purple">Blockchain</span>.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sapna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
