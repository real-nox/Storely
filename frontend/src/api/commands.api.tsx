const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "http://locahost:5500";

export interface Command {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  code: string;
  productId: {
    id: number,
    qte: number
  }[];
}

export const addCommand = async (commandInfo: Command) => {
  try {
    const response = await fetch(`${BACKEND_URL}/client//checkout`, {
      method: "POST",
      body: JSON.stringify({ command: commandInfo }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json()

    if (!result) return result?.error
    return result.response
  } catch (err) {
    console.error(err);
  }
};
