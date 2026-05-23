export default function App() {
  const colors = {
    bg: "#f8f4f2",
    bgAlt: "#f3d9de",
    text: "#241e1f",
    textSoft: "#5b4c4f",
    gold: "#c8a36a",
  };
  const fadeSection = {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.8s ease",
  };
  return (
    <div
      style={{
        background: colors.bg,
        minHeight: "100vh",
        color: colors.text,
        fontFamily: "Georgia, serif",
      }}
    >
      <style>
  {`
    @media (max-width: 768px) {
      .desktop-nav-links {
        display: none !important;
      }

      .grid-3,
      .grid-4,
      .grid-2 {
        grid-template-columns: 1fr !important;
      }

      .hero-title {
        font-size: 46px !important;
      }

      .section-padding {
        padding: 70px 24px !important;
      }

      .floating-cta {
        display: none !important;
      }

      .mobile-directions {
        display: block !important;
      }
    }
  `}
</style>
      {/* NAVBAR */}
<nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    background: "rgba(248,244,242,0.92)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #ead8dc",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: 600,
      }}
    >
      aROMA
    </div>

    <div
      style={{
        display: "flex",
        gap: 30,
        fontSize: 14,
        letterSpacing: 1,
      }}
    >
      <a href="#menu" style={{ color: colors.text, textDecoration: "none" }}>
        MENU
      </a>

      <a href="#visit" style={{ color: colors.text, textDecoration: "none" }}>
        VISIT
      </a>

      <a href="#reviews" style={{ color: colors.text, textDecoration: "none" }}>
        REVIEWS
      </a>
    </div>
  </div>
</nav>
      {/* HERO */}
      <section
        style={{
          height: "90vh",
          backgroundImage:
            "linear-gradient(rgba(36,30,31,0.65), rgba(36,30,31,0.82)), url('https://images.unsplash.com/photo-1505253213348-cd54c92b37c8?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: 20,
        }}
      >
        <div>
          <div
            style={{
              letterSpacing: 3,
              fontSize: 12,
              marginBottom: 20,
            }}
          >
            aROMA GELATO EXPERIENCE • LISBON
          </div>
          <div
  style={{
    width: 80,
    height: 2,
    background: colors.gold,
    margin: "0 auto 30px auto",
  }}
/>
          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 84px)",
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            Best Artisan Gelato in Lisbon
          </h1>

          <p
            style={{
              fontSize: 18,
              maxWidth: 700,
              lineHeight: 1.7,
            }}
          >
            Handmade Italian gelato • Specialty coffee • Cakes & pastries •
            Dolceria experience in Chiado
          </p>

          <button
            style={{
              marginTop: 30,
              background: colors.gold,
              border: "none",
              padding: "14px 28px",
              borderRadius: 999,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: colors.text,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* CREAM SECTION */}
      <section
        style={{
          background: colors.bg,
          padding: "80px 40px",
          ...fadeSection,
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: 36,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Boutique Gelato Experience
          </h2>

          <p
            style={{
              color: colors.textSoft,
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            aROMA Gelato Experience blends artisan Italian craftsmanship,
            specialty coffee culture and refined dolceria traditions into a
            luxury Lisbon dessert destination.
          </p>
        </div>
      </section>
      <section
  id="menu"
  style={{
    background: colors.bg,
    padding: "100px 40px",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: 42,
        fontWeight: 300,
        marginBottom: 50,
        textAlign: "center",
      }}
    >
      Gelato • Coffee • Dolceria
    </h2>

    <div
  className="grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  }}
>
      {[
        {
          title: "Gelato",
          items: [
            "Madagascar Vanilla",
            "Sicilian Pistachio",
            "Tiramisu",
            "Rum Raisin",
          ],
        },
        {
          title: "Specialty Coffee",
          items: [
            "Espresso",
            "Flat White",
            "Affogato",
            "Cold Brew",
          ],
        },
        {
          title: "Dolceria",
          items: [
            "Tiramisu",
            "Cheesecake",
            "Chocolate Cake",
            "Seasonal Desserts",
          ],
        },
      ].map((section) => (
        <div
          key={section.title}
          style={{
            background: "white",
            borderRadius: 24,
            padding: 40,
            border: "1px solid #ead8dc",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              marginBottom: 20,
              fontSize: 28,
              fontWeight: 400,
            }}
          >
            {section.title}
          </h3>

          {section.items.map((item) => (
            <p
              key={item}
              style={{
                marginBottom: 12,
                color: colors.textSoft,
              }}
            >
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>
{/* REVIEWS */}
<section
  id="reviews"
  style={{
    background: colors.bgAlt,
    padding: "100px 40px",
  }}
>
  <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
      Loved by Guests in Lisbon
    </h2>

    <p style={{ color: colors.textSoft, marginBottom: 50 }}>
      Customer experiences from locals, tourists and dessert lovers.
    </p>

    <div
  className="grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  }}
>
      {[
        {
          name: "Sofia M.",
          text: "Beautiful gelato, elegant shop and one of the best dessert experiences in Lisbon.",
        },
        {
          name: "James R.",
          text: "Excellent specialty coffee and artisan gelato. The affogato was outstanding.",
        },
        {
          name: "Maria L.",
          text: "A premium Italian gelato experience in Chiado. Beautiful atmosphere and flavours.",
        },
      ].map((review) => (
        <div
          key={review.name}
          style={{
            background: "#fffdfc",
            borderRadius: 24,
            padding: 32,
            border: "1px solid #ead8dc",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ color: colors.gold, marginBottom: 14 }}>★★★★★</div>
          <p style={{ color: colors.textSoft, lineHeight: 1.7 }}>
            “{review.text}”
          </p>
          <strong>{review.name}</strong>
        </div>
      ))}
    </div>
  </div>
</section>

{/* MEDIA MENTIONS */}
<section
  style={{
    background: colors.bg,
    padding: "100px 40px",
  }}
>
  <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
      Featured in Lisbon Media
    </h2>

    <p style={{ color: colors.textSoft, lineHeight: 1.8, marginBottom: 40 }}>
      aROMA Gelato Experience has been recognised by local media for its
      artisan gelato, specialty coffee and boutique dolceria experience in
      Chiado.
    </p>

    <div
  className="grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  }}
>
      <div
        style={{
          background: "#fffdfc",
          borderRadius: 24,
          padding: 32,
          border: "1px solid #ead8dc",
        }}
      >
        <h3>Local Media Feature</h3>
        <p style={{ color: colors.textSoft }}>
          Add the name of your first media article here.
        </p>
      </div>

      <div
        style={{
          background: "#fffdfc",
          borderRadius: 24,
          padding: 32,
          border: "1px solid #ead8dc",
        }}
      >
        <h3>Food & Lifestyle Mention</h3>
        <p style={{ color: colors.textSoft }}>
          Add the name of your second media article here.
        </p>
      </div>
    </div>
  </div>
</section>
{/* INSTAGRAM GALLERY */}
<section
  style={{
    background: colors.bgAlt,
    padding: "100px 40px",
  }}
>
  <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
      Follow the aROMA Experience
    </h2>

    <p style={{ color: colors.textSoft, marginBottom: 50 }}>
      Gelato, coffee, dolceria and everyday moments from Lisbon.
    </p>

    <div
  className="grid-4"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
  }}
>
      {[
        "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3",
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      ].map((img) => (
        <img
          key={img}
          src={img}
          loading="lazy"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 22,
          }}
        />
      ))}
    </div>

    <a
      href="https://instagram.com"
      target="_blank"
      style={{
        display: "inline-block",
        marginTop: 40,
        background: colors.text,
        color: "white",
        padding: "14px 28px",
        borderRadius: 999,
        textDecoration: "none",
      }}
    >
      Follow us on Instagram
    </a>
  </div>
</section>

{/* GOOGLE MAPS / VISIT */}
<section
  id="visit"
  style={{
    background: colors.bg,
    padding: "100px 40px",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "center",
    }}
  >
    <div>
      <h2 style={{ fontSize: 42, fontWeight: 300, marginBottom: 20 }}>
        Visit Us in Chiado
      </h2>

      <p style={{ color: colors.textSoft, lineHeight: 1.8, fontSize: 18 }}>
        Rua do Loreto 18, 1200-086 Lisboa, Portugal
        <br />
        <br />
        Open daily from 10:00 to 23:00
        <br />
        <br />
        Enjoy artisan gelato, specialty coffee, cakes and pastries in one of
        Lisbon’s most beautiful historic districts.
      </p>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Rua%20do%20Loreto%2018%20Lisboa"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: 30,
          background: colors.gold,
          color: colors.text,
          padding: "14px 28px",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Get Directions
      </a>
    </div>

    <iframe
      title="aROMA Gelato Lisbon Google Map"
      loading="lazy"
      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Rua%20do%20Loreto%2018%20Lisboa&t=&z=15&ie=UTF8&iwloc=B&output=embed"
      width="100%"
      height="380"
      style={{
        border: "none",
        borderRadius: 28,
        boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
      }}
    />
  </div>
</section>
      {/* PINK SECTION */}
      <section
        style={{
          background: colors.bg,
          padding: "80px 40px",
          ...fadeSection,
        }}
      >
        <div
  className="grid-2"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
  }}
>
          <img
            src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7"
            style={{ width: "100%", borderRadius: 20 }}
          />

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            style={{ width: "100%", borderRadius: 20 }}
          />
<img
            src="https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3"
            style={{ width: "100%", borderRadius: 20 }}
          />
        </div>
      </section>
      {/* FLOATING DESKTOP CTA */}
<a
  className="floating-cta"
  href="https://www.google.com/maps/search/?api=1&query=Rua%20do%20Loreto%2018%20Lisboa"
  target="_blank"
  style={{
    position: "fixed",
    right: 24,
    bottom: 24,
    zIndex: 999,
    background: colors.gold,
    color: colors.text,
    padding: "14px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  }}
>
  Get Directions
</a>

{/* STICKY MOBILE CTA */}
<a
  className="mobile-directions"
  href="https://www.google.com/maps/search/?api=1&query=Rua%20do%20Loreto%2018%20Lisboa"
  target="_blank"
  style={{
    display: "none",
    position: "fixed",
    left: 16,
    right: 16,
    bottom: 16,
    zIndex: 999,
    background: colors.gold,
    color: colors.text,
    padding: "16px 24px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
  }}
>
  Get Directions to aROMA
</a>

    </div>
  );
}