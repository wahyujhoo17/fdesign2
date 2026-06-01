import Image from "next/image";
import { ArrowUpRight, ChevronRight, Play, Plus, Sparkle, Zap } from "lucide-react";

const categories = ["ALL PRODUCTS", "OUTERWEAR", "HOODIES", "PANTS", "CREWNECK", "T-SHIRTS"];
const products = [
  ["01", "STARNOVA GREY ZIPPER", "$128.75"],
  ["02", "TRENCH LIGHT BLUE POLO", "$128.75"],
  ["03", "THE CRAFT SUNGLASSES", "$129.75"]
];
const partners = ["Sisyphus", "Epicurious", "FeatherDev", "Nietzsche", "Luminous"];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="hero-bg" />
        <nav className="topbar" aria-label="Primary navigation">
          <div className="nav-links">
            <a>MALE</a>
            <a>FEMALE</a>
            <a>BRANDS</a>
            <a>CHRISTMAS SALE</a>
          </div>
          <div className="nav-links nav-links-right">
            <a>CHART(0)</a>
            <a>WISHLIST(24)</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="brand-block">
            <h1>
              THE
              <br />
              MODAÉ
            </h1>
            <p>WE ARE FASHION STUDIO BASED IN NY, USA.</p>
          </div>
          <div className="year-block">
            <strong>1992</strong>
            <span>MON 2 DEC \ 09:12 \ 27C</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="project-note">
            <span className="dot-label">LATEST PROJECT 2024</span>
            <p>
              Wearing Modaé Studios is about more than just clothing. It's a statement
              and reminder of not forgetting who you are and what makes you special.
            </p>
          </div>
          <article className="news-card">
            <span>DEC 15</span>
            <p>
              Modaé was born with the purpose of representing every person who is
              willing to be more real. More alive. More honest with himself.
            </p>
            <button>
              WATCH THE NEWS
              <Plus size={14} />
            </button>
          </article>
        </div>
      </section>

      <section className="manifesto">
        <div className="side-copy">
          <span className="dot-label accent">ABOUT</span>
          <p>It's a statement and reminder of not forgetting who you are and what makes you special.</p>
          <div>
            <span className="dot-label accent">LATEST PROJECT 2024</span>
            <p>
              We strongly believe that each one of us is different and paradoxically
              that is precisely what we have in common as a community.
            </p>
            <a className="text-link">
              MORE ABOUT US <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="manifesto-main">
          <div className="section-count">/ 01</div>
          <h2>WEARING MODAÉ STUDIOS IS ABOUT MORE THAN JUST CLOTHING.</h2>
          <div className="look-grid">
            <article>
              <span>T-SHIRT</span>
              <h3>ABOUT:BLANK X MODAÉ</h3>
              <Image src="/assets/look-tee.webp" alt="Modaé white t-shirt look" width={1254} height={1254} />
            </article>
            <article>
              <Image src="/assets/look-jacket.webp" alt="Modaé dark jacket editorial look" width={1426} height={1103} />
              <span>JACKET</span>
              <h3>BONDOL NO COUNTER</h3>
            </article>
          </div>
        </div>
        <div className="ghost-word">THE MODAÉ STUDIO</div>
      </section>

      <section className="culture">
        <header className="culture-header">
          <span className="dot-label accent">OUR QUALITY</span>
          <h2>THE SPIRIT OF STREET CULTURE</h2>
          <span>/ 02</span>
          <h2>WITH</h2>
        </header>
        <div className="video-frame">
          <Image src="/assets/culture.webp" alt="Street culture editorial campaign" width={1646} height={956} />
          <button aria-label="Play campaign video">
            <Play size={26} fill="currentColor" />
          </button>
          <p>OUR PRODUCTS ARE ETHICALLY MANUFACTURED IN USA, ADHERING TO FAIR LABOR PRACTICES.</p>
        </div>
        <div className="culture-copy">
          <div>
            <a className="text-link">SHOP NOW <ArrowUpRight size={12} /></a>
            <p>
              Enjoy the days spent walking along the coast, listening to the melody of
              nature by the crystal clear Atlantic Sea.
            </p>
          </div>
          <h2>WITH HIGH-QUALITY CRAFTSMANSHIP</h2>
        </div>
        <div className="partner-row">
          {partners.map((partner) => (
            <div key={partner}>
              <Zap size={22} />
              <strong>{partner}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="catalog">
        <header className="catalog-head">
          <span>/ 03</span>
          <Sparkle className="spark" size={28} fill="currentColor" />
          <h2>EQUISITE PIECES FOR THE REFINED TASTE.</h2>
          <div>
            <h2>TAILORED</h2>
            <p>Our products are ethically manufactured in USA, adhering to fair labor practices.</p>
          </div>
        </header>
        <div className="catalog-body">
          <figure className="product-figure">
            <Image src="/assets/product.webp" alt="Modaé grey zipper product editorial" width={1023} height={1537} />
            <figcaption>MODAÉ<br />X COLLAB</figcaption>
          </figure>
          <div className="product-list">
            <div className="featured-row">
              <span className="dot-label accent">FEATURED PRODUCT</span>
              <button aria-label="Open featured product">
                <Plus size={17} />
              </button>
            </div>
            <div className="filters">
              {categories.map((category) => (
                <button key={category}>{category}</button>
              ))}
            </div>
            {products.map(([number, name, price]) => (
              <article className="product-item" key={number}>
                <span>/{number}</span>
                <h3>{name}</h3>
                <strong>{price}</strong>
                {number === "02" && (
                  <>
                    <p>Light Blue Trench-Knit Polo Sweater crafted from soft, breathable cotton.</p>
                    <a className="text-link">ADD TO CHART <ArrowUpRight size={12} /></a>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
        <div className="ghost-word catalog-ghost">MODAÉ-STUDIO</div>
      </section>

      <section className="strip">
        <Image src="/assets/editorial-strip.webp" alt="Modaé editorial image strip" width={2017} height={780} />
        <article>
          <span>/ 04</span>
          <p>"OPTIMAL PRODUCT RANGE OF TWENTY AND COUNTING TO OPTIMIZE BUSINESS PROCESSES AND INCREASE EFFICIENCY."</p>
          <a className="text-link">SHOP MORE <ArrowUpRight size={12} /></a>
        </article>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <p>ALL RIGHTS RESERVED.<br />TERM & CONDITIONS</p>
          <p>ADDRESS<br />4140 PARKER RD. ALLENTOWN, NEW MEXICO 31134</p>
          <p>X / INSTAGRAM / LINKEDIN<br />PRIVACY POLICY</p>
        </div>
        <div className="footer-meta">
          <span>MON 2 DEC \ 09:12 \ 27C</span>
          <span>@2024 MODAÉ</span>
        </div>
        <div className="footer-logo">MODAÉ</div>
        <div className="footer-bottom">
          <a>COPYRIGHTMODAE_LEGAL NOTICE</a>
          <a>
            BACK TO TOP <ChevronRight size={14} />
          </a>
          <a>WE ARE FASHION STUDIO BASED IN NY, USA.</a>
        </div>
      </footer>
    </main>
  );
}
