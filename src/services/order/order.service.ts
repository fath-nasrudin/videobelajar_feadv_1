import { FetchError } from "@/lib/errors/FetchError";
import { Order } from "@/types";

export async function fetchOrder(): Promise<Order[]> {
  try {
    const response = await fetch(
      `https://6911b68b7686c0e9c20eb285.mockapi.io/order`
    );
    if (!response.ok) {
      throw new FetchError("Failed to fetch orders", response.status);
    }
    return response.json();
  } catch (err) {
    if (err instanceof FetchError) throw err;
    if (err instanceof Error) throw new FetchError(err.message, 500);
    throw new FetchError("Internal Server Error", 500);
  }
}

export const api = {
  fetchOrder,
};
