import Link from "next/link";
import { CartTable } from "@/components/client/CartTable";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h1>Your cart</h1>
            <p className="muted">Review items and proceed to checkout (demo).</p>
          </div>
          <Link className="textLink" href="/shop">
            ← Continue shopping
          </Link>
        </div>

        <CartTable />
      </div>
    </main>
  );
}
