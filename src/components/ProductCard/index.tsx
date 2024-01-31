import "./styles.css";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-name">{product.name}</div>
      <div className="product-price">R$ {product.price.toFixed(2)}</div>
    </div>
  );
}
