import Link from "next/link";
import { CartTable } from "@/components/client/CartTable";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

export const metadata = {
  title: "Cart",
};

export default async function CartPage() {
  const locale = await getLocale();

  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <h1>{t(locale, "cart_title")}</h1>
            <p className="muted">{t(locale, "cart_sub")}</p>
          </div>
          <Link className="textLink" href="/shop">
            ← {t(locale, "cart_continue")}
          </Link>
        </div>

        <CartTable />
      </div>
    </main>
  );
}
