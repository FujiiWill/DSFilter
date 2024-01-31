
import { useContext } from "react";
import "./styles.css";
import { ContextFilterValues } from "../../utils/context-filter";

export default function Header() {

  const {contextFilterValues} = useContext(ContextFilterValues);

  return (
    <header>
      <nav className="nav-container container ">
        <div>
          <h1>DSFilter</h1>
        </div>
        <div>
          <p>{contextFilterValues} produto(s)</p>
        </div>
      </nav>
    </header>
  );
}
