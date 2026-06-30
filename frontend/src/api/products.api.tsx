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
