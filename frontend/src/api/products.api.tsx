export interface Items {
  category: string;
  name: string;
  icon: string;
  description: string;
  qte: number;
  price: number;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "http://locahost:5500";

export const getProducts = async () => {
  try {
    const result = await fetch(`${BACKEND_URL}/client/products`, {
      method: "GET",
      credentials: "include",
    });

    const response = await result.json();
    if (!response?.success) return response?.error;
    console.log(response);
    return response?.list;
  } catch (err) {
    console.error(err);
  }
};

export const addProducts = async (product: Items) => {
  try {
    const result = await fetch(`${BACKEND_URL}/admin/products`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productInfo: product }),
    });

    const response = await result.json();
    if (response) return true;
    return response?.error;
  } catch (err) {
    console.error(err);
  }
};

export const getProductByName = async (productName: string) => {
  try {
    const result = await fetch(`${BACKEND_URL}/admin/get-product`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productName }),
    });

    const response = await result.json();
    if (response.success) return false;
    return response?.error || "Fill in the form";
  } catch (err) {
    console.error(err);
  }
};
