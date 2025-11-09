'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

const STORAGE_KEY = "hwg_cart_v1";

const CartContext = createContext(null);

function readStoredCart() {
  if (typeof window === "undefined") return [];
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1) => {
    if (!product?.variantId) return;
    setItems((prev) => {
      const idx = prev.findIndex((item) => item.variantId === product.variantId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: Math.min(20, next[idx].quantity + quantity),
        };
        return next;
      }
      return [
        ...prev,
        {
          ...product,
          quantity: Math.min(20, quantity),
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (variantId) => {
    setItems((prev) => prev.filter((item) => item.variantId !== variantId));
  };

  const updateQuantity = (variantId, quantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.variantId === variantId
          ? { ...item, quantity: Math.min(20, Math.max(1, quantity)) }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () =>
      items.reduce((total, item) => {
        const price = Number(item.price) || 0;
        return total + price * item.quantity;
      }, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen((prev) => !prev),
    subtotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
