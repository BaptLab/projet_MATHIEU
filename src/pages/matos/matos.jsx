import React from "react";
import ContentBlock from "../../components/content-block/ContentBlock";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import data from "../../datas/txt/matos.json";
import matosImg from "../../assets/images/photos/studio/matos.jpg"; // Assurez-vous de fournir le chemin correct
import "./matos.css";
import Cta from "../../components/CTA/Cta";

function Matos() {
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
      <main>
        <div className="content-container">
          <h2 className="title">Mon matériel</h2>
          <span className="intro matos">{data.intro}</span>
          <div className="content-block matos">
            <h3 className="subtitle">
              Matériel de tournage
            </h3>
            {Object.entries(data.matos_tournage).map(
              ([category, items]) => (
                <React.Fragment key={category}>
                  <h4 className="matos-category">
                    {category}
                  </h4>
                  {Array.isArray(items)
                    ? items.map((item, index) => (
                        <span
                          className="matos-element"
                          key={index}
                        >
                          {item}
                        </span>
                      ))
                    : Object.entries(items).map(
                        ([subCategory, subItem]) => (
                          <span
                            className="matos-element"
                            key={subCategory}
                          >
                            {subItem}
                          </span>
                        )
                      )}
                </React.Fragment>
              )
            )}
          </div>
          <div className="content-block matos">
            <h3 className="subtitle">Matériel de Studio</h3>
            {Object.entries(data.matos_studio).map(
              ([category, items]) => (
                <React.Fragment key={category}>
                  <h4 className="matos-category">
                    {category}
                  </h4>
                  {Array.isArray(items)
                    ? items.map((item, index) => (
                        <span
                          className="matos-element"
                          key={index}
                        >
                          {item}
                        </span>
                      ))
                    : Object.entries(items).map(
                        ([subCategory, subItem]) => (
                          <span
                            className="matos-element"
                            key={subCategory}
                          >
                            {subItem}
                          </span>
                        )
                      )}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </main>
      <Cta />

      <Footer />
    </div>
  );
}

export default Matos;
