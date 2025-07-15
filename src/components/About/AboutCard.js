import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Yashwant Sahu </span>
            from <span className="purple"> Chhattisgarh, India.</span>
            <br />
            I recently completed my degree in B-Tech in Computer Science  at MATS Unviersity
            <br />
            I've worked on several project like Music Streaming Websit and Netfilx Clone
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yashwant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
