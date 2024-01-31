import { useEffect, useState } from "react";
import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import "./index.css";
import { ContextFilterValues } from "./utils/context-filter";
import ProductCard from "./components/ProductCard";
import { ProductDTO } from "./models/product";
import * as productService from "./services/product-service"


type QueryParams = {
  minValue: number;
  maxValue: number;
};

export default function App() {

  const minPrice = 0;
  const maxPrice = Number.MAX_VALUE;

  const [queryParams, setQueryParams] = useState<QueryParams>({
    minValue: minPrice,
    maxValue: maxPrice,
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [contextFilterValues, setContextFilterValues] = useState<number>(0);

  useEffect(() => {
    const newFilter = productService.findByPrice(
      queryParams.minValue,
      queryParams.maxValue
    );
    setProducts(newFilter);
    setContextFilterValues(newFilter.length);
  }, [queryParams]);

  function handleFilter(min: number, max: number) {
    const newMin = min;
    const newMax = max;
    setQueryParams({
      minValue: newMin || minPrice,
      maxValue: newMax || maxPrice,
    });
  }

  return (
    <ContextFilterValues.Provider
      value={{ contextFilterValues, setContextFilterValues }}
    >
      <Header />
      <main>
        <FilterCard onFilter={handleFilter} />
        <section className="listing-card container dsf-mb20">
          {
            products.map((product) => 
            <ProductCard key={product.id} product={product} />
          )}
        </section>
      </main>
    </ContextFilterValues.Provider>
  );
}
