import React, { useState } from "react";
import emailjs from "emailjs-com";
import GoingUp from "../../components/btn/goingUp/GoingUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "@mui/material/Button";
import "./contact.css";
import matosImg from "../../assets/images/photos/studio/matos.jpg";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      company,
      subject,
      message,
      priority: "high",
    };

    emailjs
      .send(
        "service_w1km3j9",
        "template_3c9gkto",
        templateParams,
        "D8y3pdc18mEveJ6es"
      )
      .then((response) => {
        console.log(
          "SUCCESS!",
          response.status,
          response.text
        );
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });

    setFirstName("");
    setLastName("");
    setCompany("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="page-container">
      <Header />
      <img
        className="page-img"
        src={matosImg}
        alt="Votre description ici"
      />
      <div id="img-fade"></div>
      <Nav />
      <main id="contact-page-content">
        <div className="content-container">
          <h2 className="title">Mes disponibilités</h2>
          <div id="google-calendar">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showPrint=0&showTitle=0&showCalendars=0&showTz=0&src=YmFwdGlzdGUubGFiYXVuZUBnbWFpbC5jb20&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5&color=%230B8043"
              style={{
                borderWidth: 0,
                borderRadius: 15,
                padding: 20,
                backgroundColor: "white",
                marginBottom: 60,
              }} // Combine styles into a single object
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="content-container">
          <h2 className="title">Me contacter</h2>
          <form onSubmit={HandleSubmit}>
            <div className="input-container">
              <label htmlFor="firstName">
                Prénom{" "}
                <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">
                Nom{" "}
                <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="company">Entreprise</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="subject">
                Objet{" "}
                <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="message">
                Votre message{" "}
                <span className="required-asterisk">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Envoyer
            </Button>
          </form>
        </div>
      </main>
      <Footer />
      <GoingUp />
    </div>
  );
}

export default Contact;
