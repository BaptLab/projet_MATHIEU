import GoingUp from "../../components/btn/goingUp/GoingUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import "./projets.css";
import projetsImg from "../../assets/images/photos/projets/projet-background.jpg";
import data from "../../datas/txt/projets.json";
import Cta from "../../components/CTA/Cta";

function Projets() {
  return (
    <div className="page-container">
      <Header />
      <img
        className="page-img"
        src={projetsImg}
        alt="illustration"
      />
      <div id="img-fade"></div>
      <Nav />
      <main>
        <div
          className="content-container"
          id="projets-container"
        >
          <h1 className="title" id="projets-title">
            Mes projets
          </h1>
          <div className="content-block">
            {Object.entries(data).map(
              ([category, projects]) => (
                <div
                  key={category}
                  className="category-container"
                >
                  <h2
                    className="subtitle"
                    id={category.toLowerCase()}
                  >
                    {category}
                  </h2>
                  <div className="projets-list">
                    {Array.isArray(projects) ? (
                      projects.map((project, index) => (
                        <a
                          className="projet-element"
                          href={project.link}
                          key={index}
                        >
                          {project.title}
                        </a>
                      ))
                    ) : (
                      <p>No projects found</p>
                    )}
                  </div>
                </div>
              )
            )}
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
