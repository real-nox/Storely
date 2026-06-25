import { products } from "../testItems";

interface Items {
  category: string;
  name: string;
  description: string;
  qte: number;
  price: number;
  isPromo: boolean;
}

export default function Item({ category_name }: { category_name: string }) {
  return (
    <>
      {products.map(
        ({ category, description, isPromo, name, price, qte }: Items) => (
          <div className="ItemCard">
            <p>{category}</p>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        ),
      )}
    </>
  );
}
