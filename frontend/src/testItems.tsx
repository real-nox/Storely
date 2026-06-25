type Category = "fruits" | "vege";

interface Items {
  category: Category;
  name: string;
  description: string;
  qte: number;
  price: number;
  isPromo: boolean;
}

export const products: Items[] = [
  {
    category: "fruits",
    name: "Apple",
    description: "Fresh red apples, rich in fiber and vitamins.",
    qte: 120,
    price: 1.99,
    isPromo: false,
  },
  {
    category: "fruits",
    name: "Banana",
    description: "Ripe yellow bananas, great for energy.",
    qte: 80,
    price: 0.99,
    isPromo: true,
  },
  {
    category: "fruits",
    name: "Mango",
    description: "Sweet and juicy tropical mangoes.",
    qte: 45,
    price: 2.49,
    isPromo: false,
  },
  {
    category: "fruits",
    name: "Grapes",
    description: "Seedless green grapes, perfect for snacking.",
    qte: 60,
    price: 3.99,
    isPromo: true,
  },
  {
    category: "vege",
    name: "Carrot",
    description: "Organic carrots, crunchy and naturally sweet.",
    qte: 200,
    price: 0.79,
    isPromo: false,
  },
  {
    category: "vege",
    name: "Broccoli",
    description: "Fresh broccoli florets, high in vitamins K and C.",
    qte: 90,
    price: 1.49,
    isPromo: true,
  },
  {
    category: "vege",
    name: "Spinach",
    description: "Baby spinach leaves, tender and iron-rich.",
    qte: 150,
    price: 1.29,
    isPromo: false,
  },
  {
    category: "vege",
    name: "Tomato",
    description: "Vine-ripened tomatoes, ideal for salads and sauces.",
    qte: 110,
    price: 0.89,
    isPromo: true,
  },
];