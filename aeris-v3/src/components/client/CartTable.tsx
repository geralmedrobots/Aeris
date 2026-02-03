"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPriceEUR } from "@/lib/products";

export function CartTable() {
  const { items, setQty, remove, clear, subtotalCents, keyFor } = useCart();

  const shippingCents = subtotalCents > 0 ? 499 : 0;
  const totalCents = subtotalCents + shippingCents;

  if (items.length === 0) {
    return (
      <div className="panel">
        <p className="muted">Your cart is empty.</p>
        <Link className="btn" href="/shop">
          Go to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="panel">
        <div className="cart__rows">
          {items.map((i) => {
            const k = keyFor(i);
            return (
              <div key={k} className="cartRow">
                <div className="cartRow__img">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    sizes="96px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="cartRow__info">
                  <Link className="textLink" href={`/product/${i.slug}`}>
                    {i.name}
                  </Link>
                  <p className="muted">
                    Size: {i.size} · Color: {i.colorName}
                  </p>
                  <p className="muted">{formatPriceEUR(i.priceCents)}</p>
                </div>

                <div className="cartRow__qty">
                  <label className="label" htmlFor={`qty-${k}`}>
                    Qty
                  </label>
                  <input
                    id={`qty-${k}`}
                    type="number"
                    min={1}
                    max={99}
                    value={i.qty}
                    onChange={(e) => setQty(k, Number(e.target.value))}
                  />
                </div>

                <div className="cartRow__total">
                  <p className="label">Item total</p>
                  <p>{formatPriceEUR(i.priceCents * i.qty)}</p>
                  <button className="btn btn--ghost" onClick={() => remove(k)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row gap" style={{ justifyContent: "flex-end" }}>
          <button className="btn btn--ghost" onClick={clear}>
            Clear cart
          </button>
        </div>
      </div>

      <div className="panel cart__summary">
        <h2>Summary</h2>
        <div className="summaryLine">
          <span className="muted">Subtotal</span>
          <span>{formatPriceEUR(subtotalCents)}</span>
        </div>
        <div className="summaryLine">
          <span className="muted">Shipping</span>
          <span>{formatPriceEUR(shippingCents)}</span>
        </div>
        <div className="summaryLine summaryLine--total">
          <span>Total</span>
          <span>{formatPriceEUR(totalCents)}</span>
        </div>
        <p className="muted">
          Checkout is a demo. No real payment will be processed.
        </p>
        <button
          className="btn"
          onClick={() => {
            alert("Demo checkout: order placed! (not really)");
            clear();
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
