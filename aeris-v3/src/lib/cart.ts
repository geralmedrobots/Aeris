import type { Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  priceCents: number;
  image: string;
  size: string;
  colorName: string;
  qty: number;
};

export type AddToCartInput = {
  product: Product;
  size: string;
  colorName: string;
  qty?: number;
};

export function cartKey(item: Pick<CartItem, "productId" | "size" | "colorName">) {
  return `${item.productId}__${item.size}__${item.colorName}`;
}

export function addItemToCart(items: CartItem[], input: AddToCartInput): CartItem[] {
  const qty = Math.max(1, Math.floor(input.qty ?? 1));
  const next = [...items];

  const candidate: CartItem = {
    productId: input.product.id,
    slug: input.product.slug,
    name: input.product.name,
    priceCents: input.product.priceCents,
    image: input.product.images[0] ?? "/product-placeholder.png",
    size: input.size,
    colorName: input.colorName,
    qty,
  };

  const key = cartKey(candidate);
  const idx = next.findIndex((i) => cartKey(i) === key);
  if (idx >= 0) {
    next[idx] = { ...next[idx], qty: Math.min(99, next[idx].qty + qty) };
    return next;
  }
  return [...next, candidate];
}

export function updateItemQty(items: CartItem[], key: string, qty: number): CartItem[] {
  const q = Math.max(0, Math.min(99, Math.floor(qty)));
  if (q === 0) return items.filter((i) => cartKey(i) !== key);
  return items.map((i) => (cartKey(i) === key ? { ...i, qty: q } : i));
}

export function removeItem(items: CartItem[], key: string): CartItem[] {
  return items.filter((i) => cartKey(i) !== key);
}

export function cartSubtotalCents(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.priceCents * i.qty, 0);
}
