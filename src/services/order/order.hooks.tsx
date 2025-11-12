"use client";

import { Order } from "@/types";
import { useEffect, useState } from "react";
import { create } from "zustand";

interface OrderState {
  orders: Order[];
  createOrderStore: (data: Order) => void;
  updateOrderStore: (orderId: string, data: Order) => void;
  deleteOrderStore: (orderId: string) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  createOrderStore: (newOrder) =>
    set((state) => ({ orders: [newOrder, ...state.orders] })),
  updateOrderStore: (orderId, orderData) =>
    set((s) => ({
      orders: s.orders.map((o) =>
        o.id === orderId ? { ...o, ...orderData } : o
      ),
    })),
  deleteOrderStore: (orderId) =>
    set((s) => ({ orders: s.orders.filter((o) => o.id !== orderId) })),
}));

export const useFetchOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchOrder() {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://6911b68b7686c0e9c20eb285.mockapi.io/order`
        );
        const orders = await response.json();
        setOrders(orders);
      } catch (error) {
        console.log(error);
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrder();
  }, []);

  return { orders, isLoading, error };
};
