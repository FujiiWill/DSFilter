import "./index.css";

export default function App() {
  return (
    <>
      <header>
        <div className="header-container container ">
          <div>
            <h1>DSFilter</h1>
          </div>
          <div>
            <p>6 produto(s)</p>
          </div>
        </div>
      </header>
      <body>
        <main>
          <section className="filter-card container dsf-mt20 dsf-mb20">
            <div className="data-container">
              <input className="dsf-mb20" type="text" placeholder="Preço minimo" />
              <input className="dsf-mb20" type="text" placeholder="Preço máximo" />
              <button className="button">Filtrar</button>
            </div>
          </section>
          <section className="listing-card container dsf-mb20">
            <div className="product-card">
              <div className="product-name">PC Gamer Pro</div>
              <div className="product-price">R$ 1200.00</div>
            </div>
            <div className="product-card">
              <div className="product-name">PC Gamer Pro</div>
              <div className="product-price">R$ 1200.00</div>
            </div>
            <div className="product-card">
              <div className="product-name">PC Gamer Pro</div>
              <div className="product-price">R$ 1200.00</div>
            </div>
            <div className="product-card">
              <div className="product-name">PC Gamer Pro</div>
              <div className="product-price">R$ 1200.00</div>
            </div>
            <div className="product-card">
              <div className="product-name">PC Gamer Pro</div>
              <div className="product-price">R$ 1200.00</div>
            </div>
            <div className="product-card">
              <div className="product-name">PC Gamer Pro</div>
              <div className="product-price">R$ 1200.00</div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
