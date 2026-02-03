"use client";

import { useCart } from "@/components/CartProvider";

export function CartCount() {
  const { count } = useCart();
  if (count <= 0) return <span className="pill pill--muted">0</span>;
  return <span className="pill">{count}</span>;
}
