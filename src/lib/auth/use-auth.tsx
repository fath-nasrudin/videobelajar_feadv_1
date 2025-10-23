"use client";

import { CreateUserInput, User } from "@/types";
import { useEffect, useState } from "react";
import {
  getCurrentUser,
  getToken,
  isClient,
  login,
  logout,
  onAuthChange,
  register,
} from "./localstorage-auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(() =>
    isClient() ? getCurrentUser() : null
  );
  useEffect(() => {
    const stop = onAuthChange(() => {
      setUser(getCurrentUser());
    });
    return stop;
  }, []);

  const doRegister = async (userData: CreateUserInput) => {
    const session = await register(userData);
    setUser(session.user);
    return session;
  };

  const doLogin = async (email: string, password: string) => {
    const session = await login(email, password);
    setUser(session.user);
    return session;
  };

  const doLogout = async () => {
    await logout();
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    register: doRegister,
    login: doLogin,
    logout: doLogout,
    getToken,
  };
}
