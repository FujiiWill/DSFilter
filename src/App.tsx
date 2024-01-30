import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import ListingCard from "./components/ListingCard";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <body>
        <main>
          <FilterCard />
          <ListingCard />
        </main>
      </body>
    </>
  );
}
