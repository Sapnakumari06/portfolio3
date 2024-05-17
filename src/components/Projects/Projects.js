import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import instability from "../../Assets/Projects/instability.png";
import editor from "../../Assets/Projects/study.png";
import realchat from "../../Assets/Projects/real.png";
import suicide from "../../Assets/Projects/suicide.png";
 import s from "../../Assets/Projects/movie.png";

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
              imgPath={realchat}
              isBlog={false}
              title="REAL TIME CHAT APPLICATION"
              description="A chat app with real-time capabilities that utilizes Appwrite on the backend. Have features which allows user for realtime messaging."
              ghLink="https://github.com/Sapnakumari06/Real-Time-Chat-Application"
               demoLink="https://github.com/Sapnakumari06/Real-Time-Chat-Application"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="STUDY-NOTION-APP"
              description="StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS."
              ghLink="https://github.com/Sapnakumari06/Study-Notion-App"
              demoLink="https://studynotion-frontend.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="FOOD-DELIVERY-APPLICATION"
              description="This is a web-based food delivery application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to browse nearby restaurants, place orders, track deliveries in real-time, create user profiles, and make secure payments."
              ghLink="https://github.com/Sapnakumari06/Food-Delivery-Application"
              demoLink="https://food-delivery-mern-app-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Sapnakumari06/AI-FOR-SOCIAL-GOOD"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instability}
              isBlog={false}
              title="Finding psychological instability "
              description="Finding psychological instability using machine learning which include various methods which are utilized for detection of mental illness among individuals of various ages. features are Register and login,Add Psychological data sets ,search on Psychological data set details ,View your profile"
              ghLink="https://github.com/Sapnakumari06/Finding-psychological-instability"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s}
              isBlog={false}
              title="Movie Website"
              description="flakes is a captivating frontend project using HTML,CSS,Javascript that brings the magic of cinema to your fingertips. Dive into a world of cinematic wonders as you explore a meticulously designed website dedicated to movies. "
              ghLink="https://github.com/Sapnakumari06/Movie-website"
               demoLink="https://movie-website06.netlify.app//"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
