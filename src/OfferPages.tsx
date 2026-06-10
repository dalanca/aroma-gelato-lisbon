import "./OfferPages.css";
import magnificoCup from "./images/magnifico-cup.png";
import degustationMenu from "./images/degustation-menu-12.jpg";
import waffleBowlPistachio from "./images/waffle-bowl-pistachio.jpeg";
import magnificoCone from "./images/magnifico-cone.png";
import comboOffer from "./images/combo-offer.jpeg";
import kidscone from "./images/kids-cone.png";
import aromaLogo from "./images/aroma-logo.jpeg";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

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
        <button
  className="directionsButton"
  type="button"
  onClick={() => {
    window.gtag?.("event", "get_directions_click", {
      offer_page: title,
    });

    window.open(mapsUrl, "_blank", "noreferrer");
  }}
>
  Get Directions
</button>

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
      title="Santo António Sharing Experiences"
      subtitle="Share something sweet together during Lisbon's favourite festival."
      offers={[
        {
          name: "Waffle Bowl Sharing Experience",
          description:
            "Perfect to share. Waffle Bowl + 2 Complimentary Iced Coffees",
          price: "Festival Special €12.90",
          image: waffleBowlPistachio,
        },
        {
          name: "Magnífico Cup Sharing Experience",
          description:
            "Perfect to share. 4 artisan gelato flavours + 2 Complimentary Iced Coffees",
          price: "Festival Special €12.90",
          image: magnificoCup,
        },
        {
          name: "12 Flavour Degustation Experience",
          description:
            "Perfect to share with friends and family. Taste 12 artisan gelato flavours",
          price: "Festival Special €19.90",
          image: degustationMenu,
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