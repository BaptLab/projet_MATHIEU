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
import studioImg from "../../assets/images/photos/studio/studio2.jpg";
import Button from "@mui/material/Button";
import "./homepage.css";

function Homepage() {
  const [tournage, mixage, montage] = data.activités;

  return (
    <div className="page-container">
      <Header />
      <img className="page-img" src={studioImg} />
      <div id="img-fade"></div>
      <Nav />
      <main>
        <div className="content-container">
          <div className="content-block intro-block">
            <h2 className="title blue">{data.question}</h2>
            <span className="intro-text">
              {data.présentation}
            </span>
          </div>
          <div
            className="content-block"
            id="présentation-perso"
          >
            <h2 className="title blue">
              Truepeaks, c'est qui ?
            </h2>
            <div className="présentation-perso-content">
              <img id="pp" src={img} />
              <p>{data.présentation_perso}</p>
            </div>
          </div>
          <span className="block-separation"></span>
          <div className="content-block">
            <h2 className="title ">Mes activités</h2>
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
            <span className="block-separation"></span>
            <div className="CTA-block">
              <h2 className="title question">
                Vous avez un projet ?
              </h2>
              <Button variant="contained" color="primary">
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Homepage;
