import React from "react";
import ContentBlock from "../../components/content-block/ContentBlock";
import Nav from "../../components/nav/Nav";
import img from "../../../src/assets/images/pp.jpg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import data from "../../datas/txt/homepage.json";
import camera from "../../assets/images/icons/camera.svg";
import headphones from "../../assets/images/icons/headphones.svg";
import sound from "../../assets/images/icons/sound.svg";
import studioImg from "../../assets/images/photos/studio/studio.jpg";
import "./homepage.css";

function Homepage() {
  const [tournage, mixage, montage] = data.activités;

  return (
    <div className="page-container">
      <Header />
      <img className="page-img" src={studioImg} />
      <Nav />
      <main>
        <div className="content-container">
          <div className="content-block">
            <h2 className="title">{data.question}</h2>
            <span className="intro-text">
              {data.présentation}
            </span>
            <ContentBlock
              id="présentation-perso"
              contentImage={img}
              contentText={data.présentation_perso}
            />
          </div>

          <div className="content-block">
            <h2 className="title">Mes activités</h2>
            <div className="activité-container">
              <ContentBlock
                icon={camera}
                title={tournage.titre}
                contentText={tournage.content}
              />
              <ContentBlock
                icon={headphones}
                title={mixage.titre}
                contentText={mixage.content}
              />
              <ContentBlock
                icon={sound}
                title={montage.titre}
                contentText={montage.content}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Homepage;
