"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import {
  addItemToCart,
  cartKey,
  cartSubtotalCents,
  removeItem,
  updateItemQty,
  type CartItem,
} from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  add: (input: { product: Product; size: string; colorName: string; qty?: number }) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  subtotalCents: number;
  count: number;
  keyFor: (item: Pick<CartItem, "productId" | "size" | "colorName">) => string;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "aeris_cart_v1";

function loadInitialCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed as CartItem[];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadInitialCart());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      add: (input) => setItems((prev) => addItemToCart(prev, input)),
      setQty: (key, qty) => setItems((prev) => updateItemQty(prev, key, qty)),
      remove: (key) => setItems((prev) => removeItem(prev, key)),
      clear: () => setItems([]),
      subtotalCents: cartSubtotalCents(items),
      count: items.reduce((sum, i) => sum + i.qty, 0),
      keyFor: (item) => cartKey(item),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
