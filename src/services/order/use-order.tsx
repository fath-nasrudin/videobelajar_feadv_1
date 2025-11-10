"use client";

import { CreateOrderInput, Order, UpdateOrderInput } from "@/types";
import { useState } from "react";
import { createOrder, getOrdersWithCourse, updateOrder } from "./order";

export function useOrder() {
  const [orders, setOrders] = useState<Order[] | []>(() =>
    getOrdersWithCourse()
  );

  const doCreateOrder = (data: CreateOrderInput) => {
    const order = createOrder(data);
    setOrders(getOrdersWithCourse());
    return order;
  };

  const doUpdateOrder = (id: string, data: UpdateOrderInput) => {
    updateOrder(id, data);
    setOrders(getOrdersWithCourse());
  };

  const doGetOrderById = (orderId: string) => {
    return orders.find((o) => o.id === orderId);
  };

  const payOrder = (orderId: string) => {
    // should validate that the order is not already paid or cancelled.

    doUpdateOrder(orderId, {
      status: "success",
      paidAt: new Date().toISOString(),
    });
  };

  const cancelOrder = (orderId: string) => {
    // should validate that the order is not already paid or cancelled.

    doUpdateOrder(orderId, {
      status: "cancelled",
    });
  };

  return {
    orders,
    createOrder: doCreateOrder,
    updateOrder: doUpdateOrder,
    getOrderById: doGetOrderById,
    payOrder,
    cancelOrder,
  };
}
