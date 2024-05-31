import React from "react";
import GoingUp from "../../components/btn/goingUp/GoingUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import "./legals.css";
import legalsData from "../../datas/txt/legals.json";

function Legals() {
  const { sections } = legalsData;

  return (
    <div className="page-container">
      <Header />
      <Nav />
      <main id="legals">
        <div
          className="content-container"
          id="legals-container"
        >
          <h1 className="title" id="projets-title">
            Mentions légales
          </h1>
          <div className="content-block">
            {sections.map((section, index) => (
              <div key={index} className="section">
                <h2 className="section-title">
                  {section.title}
                </h2>
                {section.content.map((item, idx) => (
                  <p key={idx} className="section-content">
                    {item.label && (
                      <strong>{item.label}: </strong>
                    )}
                    {item.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <GoingUp />
    </div>
  );
}

export default Legals;
