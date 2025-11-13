"use client";

import { randId } from "@/lib/localstorage.helper";
import { CreateOrderInput, Order, UpdateOrderInput } from "@/types";
import { useEffect, useState } from "react";
import { create } from "zustand";
import * as orderService from "./order.service";
import { FetchError } from "@/lib/errors/FetchError";

interface OrderState {
  orders: Order[];
  setOrderStore: (orders: Order[]) => void;
  addOrderStore: (data: Order) => void;
  updateOrderStore: (orderId: string, data: Order) => void;
  deleteOrderStore: (orderId: string) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: [],
  getOrderById: (orderId) => get().orders.find((o) => o.id === orderId),
  setOrderStore: (newOrders) => set({ orders: newOrders }),
  addOrderStore: (newOrder) =>
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
  const setOrderStore = useOrderStore((s) => s.setOrderStore);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchEffect() {
      setIsLoading(true);
      setError("");
      try {
        const newOrders = await orderService.getOrderlist();
        setOrderStore(newOrders);
      } catch (error) {
        if (error instanceof FetchError) {
          setError(error.message);
        } else {
          setError("Something went wrong!");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchEffect();
  }, []);

  return { isLoading, error };
};

export const useCreateOrder = () => {
  const addOrderStore = useOrderStore((s) => s.addOrderStore);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  async function createOrderAsync(orderData: CreateOrderInput) {
    try {
      setIsLoading(true);
      setError("");
      const createdOrder = await orderService.createOrder(orderData);
      addOrderStore(createdOrder);
      return createdOrder;
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, createOrderAsync };
};

export const useUpdateOrder = () => {
  const updateOrderStore = useOrderStore((s) => s.updateOrderStore);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  async function updateOrderAsync(
    orderId: string,
    orderData: UpdateOrderInput
  ) {
    try {
      setIsLoading(true);
      setError("");
      const updatedOrder = await orderService.updateOrder(orderId, orderData);
      updateOrderStore(orderId, updatedOrder);
      return updatedOrder;
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, updateOrderAsync };
};

export const usePayOrder = () => {
  const { updateOrderAsync, isLoading, error } = useUpdateOrder();

  async function payOrderAsync(orderId: string) {
    try {
      const paidOrder = await updateOrderAsync(orderId, {
        status: "success",
        paidAt: new Date().toISOString(),
      });
      return paidOrder;
    } catch (error) {
      console.log(error);
    }
  }

  return { isLoading, error, payOrderAsync };
};

export const useDeleteOrder = () => {
  const deleteOrderStore = useOrderStore((s) => s.deleteOrderStore);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  async function deleteOrderAsync(orderId: string) {
    try {
      setIsLoading(true);
      setError("");

      const deletedOrder = await orderService.deleteOrder(orderId);
      deleteOrderStore(orderId);
      return deletedOrder;
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, deleteOrderAsync };
};
