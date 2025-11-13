import { getCourseDetail } from "@/data/courses";
import { FetchError } from "@/lib/errors/FetchError";
import { randId } from "@/lib/localstorage.helper";
import { CreateOrderInput, Order, UpdateOrderInput } from "@/types";

const BASE_API = process.env.NEXT_PUBLIC_SERVER_API;

export async function getOrderlist(): Promise<Order[]> {
  try {
    const response = await fetch(`${BASE_API}/order`);
    if (!response.ok) {
      throw new FetchError("Failed to fetch orders", response.status);
    }
    const orders: Order[] = await response.json();
    orders.forEach((order) => {
      order.course = getCourseDetail(order.courseId);
      return order;
    });
    return orders;
  } catch (err) {
    if (err instanceof FetchError) throw err;
    if (err instanceof Error) throw new FetchError(err.message, 500);
    throw new FetchError("Internal Server Error", 500);
  }
}

export async function createOrder(orderData: CreateOrderInput): Promise<Order> {
  const order: Order = {
    id: randId("o_"),
    courseId: orderData.courseId,
    userId: orderData.userId,
    invoice: `HEL/VI/${Date.now()}`,
    status: "waiting_payment",
    totalPayment: orderData.totalPayment,
  };

  try {
    const response = await fetch(`${BASE_API}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new FetchError(
        `Request failed: ${response.status}`,
        response.status
      );
    }

    const createdOrder: Order = await response.json();
    createdOrder.course = getCourseDetail(createdOrder.courseId);
    return createdOrder;
  } catch (err) {
    if (err instanceof FetchError) throw err;
    if (err instanceof Error) throw new FetchError(err.message, 500);
    throw new FetchError("Internal Server Error", 500);
  }
}

export async function updateOrder(
  orderId: string,
  orderData: UpdateOrderInput
): Promise<Order> {
  try {
    const response = await fetch(`${BASE_API}/order/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new FetchError(
        `Request failed: ${response.status}`,
        response.status
      );
    }

    return response.json();
  } catch (err) {
    if (err instanceof FetchError) throw err;
    if (err instanceof Error) throw new FetchError(err.message, 500);
    throw new FetchError("Internal Server Error", 500);
  }
}

export async function deleteOrder(orderId: string): Promise<Order> {
  try {
    const response = await fetch(`${BASE_API}/order/${orderId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new FetchError(
        `Request failed: ${response.status}`,
        response.status
      );
    }

    return response.json();
  } catch (err) {
    if (err instanceof FetchError) throw err;
    if (err instanceof Error) throw new FetchError(err.message, 500);
    throw new FetchError("Internal Server Error", 500);
  }
}
