import GoingUp from "../../components/btn/goingUp/GoingUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import "./projets.css";
import projetsImg from "../../assets/images/photos/projets/projet.png";
import data from "../../datas/txt/projets.json";
import Cta from "../../components/CTA/Cta";

function Projets() {
  return (
    <div className="page-container">
      <Header />
      <img className="page-img" src={projetsImg} />
      <div id="img-fade"></div>
      <Nav />
      <main>
        <div className="content-container">
          <h2 className="title">Mes projets</h2>
          <div className="content-block">
            <h3 className="subtitle" id="docus">
              Documentaires
            </h3>
            <div className="projets-list">
              {data.DOCUMENTAIRE.map((element, index) => (
                <a
                  className="projet-element"
                  href={element.link}
                >
                  {element.title}
                </a>
              ))}
            </div>

            <h3 className="subtitle" id="interviews">
              Interviews
            </h3>
            <div className="projets-list">
              {data.INTERVIEWS.map((element, index) => (
                <a
                  className="projet-element"
                  href={element.link}
                >
                  {element.title}
                </a>
              ))}
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

export default Projets;
