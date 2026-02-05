import { cookies } from "next/headers";
import { getLocaleFromCookie, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const cookieValue = store.get(LOCALE_COOKIE)?.value;
  return getLocaleFromCookie(cookieValue);
}
