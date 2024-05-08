import React from "react";
import ContentBlock from "../../components/content-block/ContentBlock";
import Nav from "../../components/nav/Nav";
import img from "../../../src/assets/images/pp.jpg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import data from "../../datas/txt/homepage.json";

function Homepage() {
  return (
    <div className="page-container">
      <Header />
      <Nav />
      <ContentBlock title={data.question}>
        <ContentBlock
          contentImage={img}
          contentText={data.présentation}
        />
      </ContentBlock>
      <ContentBlock title="Mes activités">
        {/* Iterating over activités array and generating ContentBlock components */}
        {data.activités.map((activité, index) => (
          <ContentBlock
            contentImage={activité.image}
            key={index}
            title={activité.titre}
            contentText={activité.content}
          />
        ))}
      </ContentBlock>
      <Footer />
    </div>
  );
}

export default Homepage;
