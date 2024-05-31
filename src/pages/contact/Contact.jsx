import React, { useState } from "react";
import emailjs from "emailjs-com";
import GoingUp from "../../components/btn/goingUp/GoingUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Button from "@mui/material/Button";
import contactImg from "../../assets/images/photos/contact/contact4.jpg";
import "./contact.css";
import matosImg from "../../assets/images/photos/studio/matos.jpg";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [noDate, setNoDate] = useState(false);
  const [messageType, setMessageType] = useState(""); // New state for message type

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!noDate && !startDate && !endDate) {
      alert(
        "Veuillez préciser au moins une date ou indiquer l'absence de dates !"
      );
      return;
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      endDate: noDate ? "Date non renseignée" : endDate,
      startDate: noDate ? "Date non renseignée" : startDate,
      company,
      subject,
      message,
      priority: "high",
    };

    emailjs
      .send(
        "service_a86o8ad",
        "template_i1ir0g5",
        templateParams,
        "XEhpPPR0padVV3jKf"
      )
      .then((response) => {
        console.log(
          "SUCCESS!",
          response.status,
          response.text
        );
        setMessageType("success"); // Set message type to success
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setMessageType("error"); // Set message type to error
      });

    setFirstName("");
    setLastName("");
    setCompany("");
    setSubject("");
    setMessage("");
    setEndDate("");
    setStartDate("");
    setNoDate(false);
  };

  return (
    <div className="page-container">
      <Header />
      <img
        className="page-img"
        src={contactImg}
        alt="Votre description ici"
      />
      <div id="img-fade"></div>
      <Nav />
      <main id="contact-page-content">
        <div className="content-container">
          <h1 className="title">Me contacter</h1>

          <h2 className="title">Mes disponibilités</h2>

          <div id="google-calendar-desktop">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=truepeak.prod%40gmail.com&ctz=UTC&showPrint=0&showTitle=0&showCalendars=0&showTz=0"
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
          <div id="google-calendar-mobile">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=truepeak.prod%40gmail.com&ctz=UTC&showPrint=0&showTitle=0&showCalendars=0&showTz=0&mode=AGENDA"
              style={{
                borderWidth: 0,
                borderRadius: 5,
                padding: 0,
                backgroundColor: "white",
                marginBottom: 60,
              }}
              width="100%"
              min-width="220"
              height="400"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="content-container">
          <h2 className="title">Formulaire de contact</h2>
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
            <div
              id="date-container"
              className="input-container"
            >
              <label htmlFor="date">
                Dates hypothétiques du projet{" "}
                <span className="required-asterisk">*</span>
              </label>
              <div id="date-selector-container">
                <div className="input-container">
                  <label htmlFor="startDate">
                    Date de début
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) =>
                      setStartDate(e.target.value)
                    }
                    disabled={noDate} // Disable if checkbox is checked
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="endDate">
                    Date de fin
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) =>
                      setEndDate(e.target.value)
                    }
                    disabled={noDate} // Disable if checkbox is checked
                  />
                </div>
              </div>
              <div
                id="checkbox-date-container"
                className="input-container"
              >
                <label htmlFor="noDate">
                  Je ne connais pas encore les dates{" "}
                </label>
                <input
                  type="checkbox"
                  id="noDate"
                  checked={noDate}
                  onChange={(e) =>
                    setNoDate(e.target.checked)
                  }
                />
              </div>
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
            {messageType === "success" && (
              <span id="success-msg">
                Votre message a bien été envoyé !
              </span>
            )}
            {messageType === "error" && (
              <span id="success-msg">
                <span id="error-msg">
                  Il y'a eu une erreur lors de l'envoi du
                  message.
                  <br />
                  <br />
                  Contactez directement
                  truepeak.prod@gmail.com
                </span>
              </span>
            )}
          </form>
        </div>
      </main>
      <Footer />
      <GoingUp />
    </div>
  );
}

export default Contact;
