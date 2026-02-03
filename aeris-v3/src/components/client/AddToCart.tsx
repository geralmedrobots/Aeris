"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [colorName, setColorName] = useState(product.colors[0]?.name ?? "");
  const [qty, setQty] = useState(1);

  const canAdd = useMemo(() => {
    return Boolean(size) && Boolean(colorName) && qty >= 1;
  }, [size, colorName, qty]);

  return (
    <div className="panel">
      <div className="formRow">
        <div className="field">
          <label className="label" htmlFor="size">
            Size
          </label>
          <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
            {product.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="label" htmlFor="color">
            Color
          </label>
          <select
            id="color"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          >
            {product.colors.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="formRow">
        <div className="field">
          <label className="label" htmlFor="qty">
            Qty
          </label>
          <input
            id="qty"
            type="number"
            min={1}
            max={99}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>

        <button
          className="btn"
          type="button"
          disabled={!canAdd}
          onClick={() => {
            add({ product, size, colorName, qty });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
