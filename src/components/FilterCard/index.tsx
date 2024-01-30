import "./styles.css";

export default function FilterCard() {
  return (
    <section className="filter-card container dsf-mt20 dsf-mb20">
      <div className="filter-container">
        <input className="dsf-mb20" type="text" placeholder="Preço minimo" />
        <input className="dsf-mb20" type="text" placeholder="Preço máximo" />
        <button className="button">Filtrar</button>
      </div>
    </section>
  );
}
