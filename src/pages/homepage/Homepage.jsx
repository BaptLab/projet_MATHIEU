import React from "react";
import ContentBlock from "../../components/content-block/ContentBlock";
import Nav from "../../components/nav/Nav";
import Fab from "@mui/material/Fab";
import { useCustomNavigate } from "../../utils/navigationUtils";

import img from "../../../src/assets/images/pp.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import data from "../../datas/txt/homepage.json";
import camera from "../../assets/images/icons/camera.svg";
import headphones from "../../assets/images/icons/headphones.svg";
import sound from "../../assets/images/icons/sound.svg";
import studioImg from "../../assets/images/photos/studio/studio3.jpg";
import { useState } from "react";
import dataTarfis from "../../datas/txt/tarifs.json";
import Button from "@mui/material/Button";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import projet1 from "../../assets/images/photos/projets/projet1.png";
import projet2 from "../../assets/images/photos/projets/projet2.png";

import "./homepage.css";
import GoingUp from "../../components/btn/goingUp/GoingUp";
import Cta from "../../components/CTA/Cta";
function Homepage() {
  const customNavigate = useCustomNavigate();
  const link1 =
    "https://www.allocine.fr/film/fichefilm_gen_cfilm=312684.html";
  const link2 = "https://nouveausouffledocu.fr/";
  const renderPriceBlock = (activity) => {
    return (
      <div
        className="price-container contentBlock-container"
        id={`prix-${activity}-container`}
      >
        <span className="price-prestation">
          Préstations comprises :
          <ul className="description-list">
            {dataTarfis.tarifs_data[
              activity
            ].description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </span>
        <div className="price-detail-container">
          {Object.entries(
            dataTarfis.tarifs_data[activity].prix
          ).map(([key, value]) => (
            <div key={key}>
              <h3>{value}</h3>
            </div>
          ))}
          {dataTarfis.tarifs_data[activity].info && (
            <span className="info-prix" span>
              * {dataTarfis.tarifs_data[activity].info}
            </span>
          )}
        </div>
      </div>
    );
  };

  const [tournage, mixage, montage] = data.activités;
  let [tarifSwitch, setTarifSwitch] = useState(false);
  let [
    tournageTarifSwitchMobile,
    setTournageTarifSwitchMobile,
  ] = useState(false);
  let [
    mixageTarifSwitchMobile,
    setMixageTarifSwitchMobile,
  ] = useState(false);
  let [
    montageTarifSwitchMobile,
    setMontageTarifSwitchMobile,
  ] = useState(false);

  const toggleTarifSwitch = () => {
    setTarifSwitch(!tarifSwitch);
  };
  const toggleTournageTarifSwitchMobile = () => {
    setTournageTarifSwitchMobile(
      !tournageTarifSwitchMobile
    );
  };

  const toggleMixageTarifSwitchMobile = () => {
    setMixageTarifSwitchMobile(!mixageTarifSwitchMobile);
  };

  const toggleMontageTarifSwitchMobile = () => {
    setMontageTarifSwitchMobile(!montageTarifSwitchMobile);
  };

  return (
    <div className="page-container">
      <Header />
      <img
        className="page-img"
        src={studioImg}
        alt="Studio de mixage"
      />
      <div id="img-fade"></div>
      <Nav />
      <main>
        <div className="content-container">
          <h1 className="title">Accueil</h1>
          <div className="content-block intro-block">
            <h2 className="title">{data.question}</h2>
            <span className="intro-text">
              {data.présentation}
            </span>
          </div>
          <div
            className="content-block"
            id="présentation-perso"
          >
            <h2 className="title">{data.question2}</h2>
            <div className="présentation-perso-content">
              <div className="pp-container">
                <img
                  id="pp"
                  src={img}
                  alt="photo de profil"
                />
                <h3 id="name">{data.noms}</h3>
              </div>
              <p>{data.présentation_perso}</p>
            </div>
          </div>
          <span className="block-separation"></span>
          <div className="content-block">
            <h2 className="title">Mes activités</h2>
            <div className="activité-container">
              <ContentBlock
                icon={camera}
                title={tournage.titre}
                contentText={tournage.content}
              />
              <div className="price-mobile">
                <div
                  className={`activité-container ${
                    tournageTarifSwitchMobile
                      ? "show-tarif-mobile"
                      : "hidden-tarif-mobile"
                  }`}
                  id="tarif-mobile"
                >
                  {renderPriceBlock("tournage")}
                </div>
                <Fab
                  color="primary"
                  aria-label="arrow-up"
                  id="display-price-btn"
                  onClick={toggleTournageTarifSwitchMobile}
                  size="medium" // Set the size to small
                >
                  {!tournageTarifSwitchMobile && (
                    <KeyboardArrowDownRoundedIcon />
                  )}
                  {tournageTarifSwitchMobile && (
                    <KeyboardArrowUpRoundedIcon />
                  )}
                </Fab>
              </div>
              <ContentBlock
                icon={headphones}
                title={mixage.titre}
                contentText={mixage.content}
              />
              <div className="price-mobile">
                <div
                  className={`activité-container ${
                    mixageTarifSwitchMobile
                      ? "show-tarif-mobile"
                      : "hidden-tarif-mobile"
                  }`}
                  id="tarif-mobile"
                >
                  {renderPriceBlock("mixage")}
                </div>
                <Fab
                  color="primary"
                  aria-label="arrow-up"
                  id="display-price-btn"
                  onClick={toggleMixageTarifSwitchMobile}
                  size="medium" // Set the size to small
                >
                  {!mixageTarifSwitchMobile && (
                    <KeyboardArrowDownRoundedIcon />
                  )}
                  {mixageTarifSwitchMobile && (
                    <KeyboardArrowUpRoundedIcon />
                  )}
                </Fab>
              </div>

              <ContentBlock
                icon={sound}
                title={montage.titre}
                contentText={montage.content}
              />
              <div className="price-mobile">
                <div
                  className={`activité-container ${
                    montageTarifSwitchMobile
                      ? "show-tarif-mobile"
                      : "hidden-tarif-mobile"
                  }`}
                  id="tarif-mobile"
                >
                  {renderPriceBlock("montage")}
                </div>
                <Fab
                  color="primary"
                  aria-label="arrow-up"
                  id="display-price-btn"
                  onClick={toggleMontageTarifSwitchMobile}
                  size="medium" // Set the size to small
                >
                  {!montageTarifSwitchMobile && (
                    <KeyboardArrowDownRoundedIcon />
                  )}
                  {montageTarifSwitchMobile && (
                    <KeyboardArrowUpRoundedIcon />
                  )}
                </Fab>
              </div>
            </div>
            <div id="desktop-section-tarif">
              <div
                className={`activité-container ${
                  tarifSwitch
                    ? "show-tarif-desktop"
                    : "hidden-tarif-desktop"
                }`}
                id="tarif-desktop"
              >
                {renderPriceBlock("tournage")}
                {renderPriceBlock("mixage")}
                {renderPriceBlock("montage")}
              </div>
              {!tarifSwitch && (
                <h3 className="tarif-title">
                  Afficher les tarifs
                </h3>
              )}
              {tarifSwitch && (
                <h3 className="tarif-title">
                  Masquer les tarifs
                </h3>
              )}
              <Fab
                color="primary"
                aria-label="arrow-up"
                id="display-price-btn"
                onClick={toggleTarifSwitch}
                size="medium" // Set the size to small
              >
                {!tarifSwitch && (
                  <KeyboardArrowDownRoundedIcon />
                )}
                {tarifSwitch && (
                  <KeyboardArrowUpRoundedIcon />
                )}
              </Fab>
            </div>
            <span className="block-separation"></span>
            <div className="content-block">
              <h2 className="title">
                Mes derniers projets
              </h2>
              <div className="activité-container projet-container">
                <div className="contentBlock-container">
                  <a
                    href={link1}
                    target="_blank"
                    className="contentBlock-content"
                  >
                    <img
                      className="content-img"
                      src={projet1}
                      alt='affiche du film "Instantanée"'
                    />
                  </a>
                </div>
                <div className="contentBlock-container">
                  <a
                    className="contentBlock-content"
                    href={link2}
                    target="_blank"
                  >
                    <img
                      className="content-img"
                      src={projet2}
                      alt='affiche du film "Nouveau souffle"'
                    />
                  </a>
                </div>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => customNavigate("Projets")}
              >
                Tous mes projets{" "}
              </Button>
            </div>
            <span className="block-separation"></span>
            <Cta />
          </div>
        </div>
      </main>
      <Footer />
      <GoingUp />
    </div>
  );
}

export default Homepage;
