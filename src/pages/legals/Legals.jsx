import React from "react";
import GoingUp from "../../components/btn/goingUp/GoingUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import "./legals.css";

function Legals() {
  const autoEntrepreneurName = "[Votre nom]";
  const activity = "Ingénieur du son";
  const address = "[Votre adresse]";
  const phoneNumber = "[Votre numéro de téléphone]";
  const email = "[Votre adresse e-mail]";
  const hostName = "[Nom de l'hébergeur]";
  const hostAddress = "[Adresse de l'hébergeur]";

  return (
    <div className="page-container">
      <Header />
      <Nav />
      <main id="legals">
        <div
          className="content-container"
          id="legals-container"
        >
          <h2 className="title" id="projets-title">
            Mentions légales
          </h2>
          <div className="content-block">
            <div className="section">
              <h3 className="section-title">
                1. Informations sur l'auto-entrepreneur
              </h3>
              <p className="section-content">
                <strong>
                  Nom de l'auto-entrepreneur :
                </strong>{" "}
                {autoEntrepreneurName}
              </p>
              <p className="section-content">
                <strong>Activité :</strong> {activity}
              </p>
              <p className="section-content">
                <strong>Adresse :</strong> {address}
              </p>
              <p className="section-content">
                <strong>Numéro de téléphone :</strong>{" "}
                {phoneNumber}
              </p>
              <p className="section-content">
                <strong>Adresse e-mail :</strong> {email}
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">
                2. Hébergement
              </h3>
              <p className="section-content">
                <strong>Hébergeur :</strong> {hostName}
              </p>
              <p className="section-content">
                <strong>Adresse :</strong> {hostAddress}
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">
                3. Propriété intellectuelle
              </h3>
              <p className="section-content">
                Le contenu de ce site, y compris mais sans
                s'y limiter, les textes, images, vidéos et
                éléments graphiques, est la propriété de{" "}
                {autoEntrepreneurName}. Toute reproduction
                ou utilisation non autorisée est interdite.
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">
                4. Collecte de données personnelles
              </h3>
              <p className="section-content">
                <strong>Finalité de la collecte :</strong>{" "}
                Les informations personnelles collectées sur
                ce site ne sont utilisées qu'à des fins de
                simplification des demandes de contacts.
                Elles ne seront en aucun cas vendues ou
                cédées à des tiers sans votre consentement.
              </p>
              <p className="section-content">
                <strong>Droit d'accès :</strong>{" "}
                Conformément à la loi "Informatique et
                Libertés" du 6 janvier 1978 modifiée et au
                Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit
                d'accès, de rectification et de suppression
                des données vous concernant. Pour exercer ce
                droit, veuillez nous contacter à l'adresse
                e-mail fournie ci-dessus.
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">5. Cookies</h3>
              <p className="section-content">
                Ce site ne fait l'usage d'aucun cookies.
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">
                6. Liens externes
              </h3>
              <p className="section-content">
                Ce site peut contenir des liens vers des
                sites externes pertinents pour les services
                proposés. Cependant, nous n'assumons aucune
                responsabilité quant au contenu de ces sites
                externes.
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">
                7. Responsabilité
              </h3>
              <p className="section-content">
                Nous nous efforçons de fournir des
                informations exactes et à jour sur ce site,
                mais nous ne pouvons garantir l'exactitude
                ou l'exhaustivité des informations fournies.
                En conséquence, nous déclinons toute
                responsabilité quant à l'utilisation qui
                pourrait être faite de ces informations.
              </p>
            </div>

            <div className="section">
              <h3 className="section-title">
                8. Modification des mentions légales
              </h3>
              <p className="section-content">
                Nous nous réservons le droit de modifier ces
                mentions légales à tout moment. Les
                modifications prendront effet dès leur
                publication sur le site.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GoingUp />
    </div>
  );
}

export default Legals;
