import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/landing.css";
import Axios from "axios";
// import image from "../img/undraw_lost_bqr2.svg";
import image from "../img/lost-2.svg";
import developer from "../img/developer_outline I.svg";
import login from "../img/login-1.svg";
import list_item from "../img/list-item.svg";
import notification from "../img/notification.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import mail from "../img/mail.svg";

// import image from "../img/earth.svg";
import { Container, Row, Button, Form } from "react-bootstrap";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const postitem = () => {
    if (localStorage.getItem("user") !== null) {
      console.log("User already logged in !");
    } else {
      console.log("Not logged in");
    }
  };

  const sendMessage = () => {
    const data = {
      name,
      email,
      message,
    };
    Axios({
      method: "POST",
      url: "/sendmessage",
      data: data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="intro">
          <div className="part-1">
            <div className="title">
              <h1>Lost and Found</h1>
              <p>Lost it. List it. Find it.</p>
            </div>
          </div>
          <div className="part-2">
            <div className="image">
              <img
                src={image}
                style={{ width: "500px", height: "500px" }}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="post-item">
          <button class="button" onClick={postitem}>Post Item</button>
        </div>         */}
      </div>
      {/* <div className="project-inspiration">
        <h6>My Project Inspiration</h6>
        <p>Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
      </div> */}
      <Container fluid className="total-inspiration">
        <div>
          <img
            src={developer}
            style={{ width: "500px", height: "500px" }}
            alt=""
          />
        </div>
        <Row className="inspiration">
          <h6 className="section-heading">My Project Inspiration</h6>
          <p>
            Colleges are the place where we come to home mentioning about losing
            our new earphone which might have kept in a desk but not sure if
            it's still there. This problem feels so relatable to most of the
            college students. A problem will still remain the same until someone
            builds a solution to it.
          </p>
          <Button variant="custom" size="lg">
            Get Started
          </Button>
        </Row>
      </Container>
      <Container fluid>
        <div className="total-about">
          <div className="about-heading">
            <h6 className="section-heading">How it works ?</h6>
          </div>
          <div className="about-card">
            <div className="info">
              <img
                src={login}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
              <h4>Create an account</h4>
              <p>Initially, you have to create an account to get started.</p>
              <a href="/log-in"><Button variant="custom" size="lg">
                Sign Up
              </Button></a>
            </div>
            <div className="info">
              <img
                src={list_item}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
              <h4>List Lost/Found Item</h4>
              <p>
                List your item on the wall by filling certain details and image.
                That's it !
              </p>
            </div>
            <div className="info">
              <img
                src={notification}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
              <h4>Get Notified</h4>
              <p>
                Once anyone posts an item, we make our registred users aware
                about the same by sending notification .
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid>
        <div className="total-contact-form">
          <div className="contact-title">
            <h6 className="section-heading"> Contact Form</h6>
            <p>
              If there is something you want to suggest or may be just a hello
              do reach out.
            </p>
          </div>
          <div className="contact-form">
            <Form>
              <Form.Label>Name :</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address :</Form.Label>
                <Form.Control
                  type="email"
                  size="lg"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message :</Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  rows={6}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="custom" onClick={sendMessage}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
      <Container fluid>
        <div className="footer">
          <div className="social-icon">
            <a href="https://github.com/eswarupkumar" target="_blank"><img src={github} className="icon github" alt="" /></a> 
            <a href="https://www.linkedin.com/in/e-swarup-kumar/" target="_blank"><img src={linkedin} className="icon" alt="" /></a> 
            <a href="https://www.instagram.com/_swarup._.kumar_/" target="_blank"><img src={instagram} className="icon" alt="" /></a> 
            <a href="mailto:eswarupkumar1111@silicon.ac.in" target="_blank"><img src={mail} className="icon" alt="" /></a> 
          </div>
          <div className="personal-info">
            <p>Created with ❤️ using MERN by </p>
            <h4><span className="symbol">&#60;</span>E Swarup Kumar<span className="symbol">/&#62;</span></h4>
            <h6>Full Stack Developer</h6>
            <a href="https://www.swarupwho.codes" target="_blank"><h6>swarupwho.codes</h6></a>
          </div>
          <h4>Copyright © 2021 E Swarup Kumar. All rights reserved.</h4>
        </div>
      </Container>
      {/* <div className="About">
        <div>
          <h1>About the project</h1>
          <p>
            
          </p>
        </div>
      </div> */}
    </>
  );
}
