import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/image copy 2.png";
import blood from "../../Assets/Projects/image.png";
import ecom from "../../Assets/Projects/image copy.png";
import music from "../../Assets/Projects/image copy 3.png";
import javascript from "../../Assets/Projects/javaScript.webp";
import react from "../../Assets/Projects/react-logo@3x.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Streaming Website"
              description="I developed a music streaming application using React.js, Node.js, Express.js, MongoDB, and Material UI. The platform includes playlist creation, secure user authentication, and an interactive UI, designed with Material UI for a seamless and engaging user experience."
              ghLink="https://github.com/yashwant2002/MERN-MusicApp.git"
              demoLink="https://mern-musicapp-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="I built a Netflix-inspired streaming platform using React.js, Node.js, Express.js, MongoDB, Material UI, and Tailwind CSS. It features a dynamic UI, movie recommendations, user authentication, and TMDB API integration for trending content, ensuring a seamless and responsive user experience."
              ghLink="https://github.com/yashwant2002/MERN-Neflix.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce website"
              description="I built an e-commerce platform using React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Razorpay API, featuring user authentication, product management, payment integration, a real-time cart system, order tracking, and a responsive UI/UX designed with Tailwind CSS and Material UI."
              ghLink="https://github.com/yashwant2002/Ecom-MERN.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React Project"
              description="I have built several projects using React, including a weather application and a counter app. These projects helped me strengthen my understanding of React concepts such as components, state management, props, and API integration. Through hands-on experience, I gained confidence in building responsive and interactive user interfaces"
              ghLink="https://github.com/yashwant2002/React.js.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javascript}
              isBlog={false}
              title="Javascript Project"
              description="I have built several projects using JavaScript and React, such as a weather application and a counter app. These projects helped me gain hands-on experience with JavaScript fundamentals like DOM manipulation, event handling, and asynchronous programming, as well as React-specific concepts such as components, state management, props, and API integration. Working on these projects has improved my ability to create interactive and user-friendly web applications"
              ghLink="https://github.com/yashwant2002/Javascirpt.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Blood Link"
              description="LifeFlow is a blood donation platform built with the MERN stack (MongoDB, Express, React, Node.js) that connects donors, receivers, and hospitals. Users can register as donors or receivers with their profile details. The app supports real-time blood requests filtered by blood group and location using the Geolocation API. It tracks donation history, includes an admin panel for hospital staff, and sends email notifications to nearby donors for urgent needs"
              ghLink="https://github.com/yashwant2002/Bloodlink.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
