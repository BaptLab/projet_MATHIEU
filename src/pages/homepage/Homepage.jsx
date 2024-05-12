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

function Homepage() {
  const [tournage, mixage, montage] = data.activités;

  return (
    <div className="page-container">
      <Header />
      <Nav />
      <ContentBlock
        title={data.question}
        titleIntroText={data.présentation}
      >
        <ContentBlock
          contentImage={img}
          contentText={data.présentation_perso}
        />
      </ContentBlock>
      <ContentBlock title="Mes activités">
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
      </ContentBlock>
      <Footer />
    </div>
  );
}

export default Homepage;
