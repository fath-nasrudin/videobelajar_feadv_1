import { FetchError } from "@/lib/errors/FetchError";
import { CreateOrderInput, Order } from "@/types";

export async function getOrderlist(): Promise<Order[]> {
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

export async function createOrder(order: CreateOrderInput): Promise<Order> {
  try {
    const response = await fetch(
      `https://6911b68b7686c0e9c20eb285.mockapi.io/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (!response.ok) {
      throw new FetchError(
        `Request failed: ${response.status}`,
        response.status
      );
    }

    const createdOrder = await response.json();
    return createdOrder;
  } catch (err) {
    if (err instanceof FetchError) throw err;
    if (err instanceof Error) throw new FetchError(err.message, 500);
    throw new FetchError("Internal Server Error", 500);
  }
}
