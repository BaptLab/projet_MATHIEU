import ContentBlock from "../../components/content-block/ContentBlock";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import data from "../../datas/txt/matos.json";
import "./matos.css";

function Matos() {
  return (
    <div className="page-container">
      <Header />
      <Nav />
      <ContentBlock
        id="matos"
        title="Matériel"
        titleIntroText={data.intro}
      >
        <ContentBlock title="En tournage">
          {Object.entries(data.matos_tournage).map(
            ([subtitle, list], index) => (
              <ContentBlock
                key={index}
                id={`matos-${subtitle
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                title={subtitle}
                contentText={list}
              />
            )
          )}
        </ContentBlock>
        <ContentBlock title="En studio">
          {Object.entries(data.matos_studio).map(
            ([subtitle, list], index) => (
              <ContentBlock
                key={index}
                id={`matos-${subtitle
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                title={subtitle}
                contentText={list}
              />
            )
          )}
        </ContentBlock>
      </ContentBlock>
      <Footer />
    </div>
  );
}

export default Matos;
