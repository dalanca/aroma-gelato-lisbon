import "./OfferPages.css";

import waffleBowlPistachio from "./images/waffle-bowl-pistachio.jpeg";
import magnificoCone from "./images/magnifico-cone.png";
import comboOffer from "./images/combo-offer.jpeg";
import kidscone from "./images/kids-cone.png";
import aromaLogo from "./images/aroma-logo.jpeg";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=aROMA+Gelato+Experience+Chiado+Lisbon";

type Offer = {
  name: string;
  description: string;
  price: string;
  image?: string;
};

type OfferPageProps = {
  type: string;
  title: string;
  subtitle: string;
  offers: Offer[];
  heroImage?: string;
};

function OfferPage({
  type,
  title,
  subtitle,
  offers,
  heroImage,
}: OfferPageProps) {
const params = new URLSearchParams(window.location.search);
const utmSource = params.get("utm_source");
const utmMedium = params.get("utm_medium");
const utmCampaign = params.get("utm_campaign");

console.log("QR Tracking", {
  utmSource,
  utmMedium,
  utmCampaign,
});
  return (
    <main className={`offerPage ${type}`}>
      <section className="offerCard">
<div className="logoContainer">
  <img
    src={aromaLogo}
    alt="aROMA Gelato Experience"
    className="offerLogo"
  />
</div>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>

        {heroImage && (
          <img className="heroImage" src={heroImage} alt={title} />
        )}

        <div className="offers">
          {offers.map((offer, index) => (
            <div className="offerBox" key={index}>
              {offer.image && (
                <img
                  className="offerImage"
                  src={offer.image}
                  alt={offer.name}
                />
              )}

              <h2>{offer.name}</h2>
              <p>{offer.description}</p>
              <div className="price">{offer.price}</div>
            </div>
          ))}
        </div>

        <p className="redeem">To redeem, show this QR page in store.</p>
        <p className="terms">
          Valid during the month of June Santo António Festival.
        </p>

        <div className="buttonRow">
  <a
    className="directionsButton"
    href={mapsUrl}
    target="_blank"
    rel="noreferrer"
  >
    Get Directions
  </a>

  <a className="menuButton" href="/#menu">
    View Menu
  </a>
</div>
      </section>
    </main>
  );
}

export function HotelOffer() {
  return (
    <OfferPage
      type="gold"
      title="Exclusive Hotel Guest Experience"
      subtitle="Choose one of our signature Santo António offers."
      offers={[
        {
          name: "Dolce Vita Waffle Bowl",
          description: "Waffle Bowl + Complimentary Iced Coffee",
          price: "€8.90",
          image: waffleBowlPistachio,
        },
        {
          name: "Magnífico Cone",
          description: "4 flavours, special cone + Complimentary Iced Coffee",
          price: "€9.90",
          image: magnificoCone,
        },
      ]}
    />
  );
}

export function FestivalOffer() {
  return (
    <OfferPage
      type="silver"
      heroImage={comboOffer}
      title="Santo António Festival Offers"
      subtitle="Celebrate with our gelato, coffee and Pastel de Nata combos."
      offers={[
        {
          name: "Gelato Regolare + Iced Coffee",
          description: "1x Gelato Regolare + Iced Caffé/Latte",
          price: "€8.90",
        },
        {
          name: "Pastel de Nata with Gelato + Iced Coffee",
          description: "1x Pastel de Nata with Gelato + Iced Caffé/Latte",
          price: "€7.90",
        },
        {
          name: "Pastel de Nata + Iced Coffee",
          description: "1x Pastel de Nata + Iced Caffé/Latte",
          price: "€5.90",
        },
      ]}
    />
  );
}

export function FamilyOffer() {
  return (
    <OfferPage
      type="blue"
      heroImage={kidscone}
      title="Family Gelato Time"
      subtitle="A special Santo António treat for parents and children."
      offers={[
        {
          name: "Family Special",
          description: "Buy any Regolare, Grande or Magnífico gelato",
          price: "+ 1 Bambino Cone for €1",
        }
      ]}
    />
  );
}