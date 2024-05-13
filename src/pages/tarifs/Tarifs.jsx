import ContentBlock from "../../components/content-block/ContentBlock";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import "./tarifs.css";
import data from "../../datas/txt/tarifs.json";
import camera from "../../assets/images/icons/camera.svg";
import headphones from "../../assets/images/icons/headphones.svg";
import sound from "../../assets/images/icons/sound.svg";

function Tarifs() {
  const dataTarfis = data.tarifs_data;
  return (
    <div className="page-container">
      <Header />
      <Nav />
      <ContentBlock title="Mes Tarifs">
        <ContentBlock
          title="Tournage"
          icon={camera}
          subtitle={dataTarfis.tournage.prix}
          contentText={dataTarfis.tournage.description}
        />
        <ContentBlock
          title="Mixage sonore"
          icon={headphones}
          subtitle={dataTarfis.mixage.prix}
          contentText={dataTarfis.mixage.description}
        />
        <ContentBlock
          title="Montage sonore"
          icon={sound}
          subtitle={dataTarfis.montage.prix}
          contentText={dataTarfis.montage.description}
          infos={dataTarfis.montage.info}
        />
      </ContentBlock>
      <Footer />
    </div>
  );
}

export default Tarifs;
