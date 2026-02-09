import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";
import { RegisterForm } from "@/components/client/RegisterForm";
import { AuthBackground } from "@/components/client/AuthBackground";
import "../auth.css";

export default async function RegisterPage() {
  const locale = await getLocale();

  return (
    <div className="authPage">
      <AuthBackground />
      <div className="authContainer">
        <div className="authCard">
          <div className="authHeader">
            <Link href="/" className="authLogo">
              <Image
                src="/logo.png"
                alt="Aeris Logo"
                width={40}
                height={40}
                className="authLogoImage"
              />
              aeris
            </Link>
            <h1 className="authTitle">{t(locale, "auth_register_title")}</h1>
            <p className="authSubtitle">{t(locale, "auth_register_subtitle")}</p>
          </div>

          <RegisterForm
            locale={locale}
            translations={{
              name: t(locale, "auth_name"),
              email: t(locale, "auth_email"),
              password: t(locale, "auth_password"),
              confirmPassword: t(locale, "auth_confirm_password"),
              agreeTerms: t(locale, "auth_agree_terms"),
              terms: t(locale, "auth_terms"),
              and: t(locale, "auth_and"),
              privacy: t(locale, "auth_privacy"),
              registerButton: t(locale, "auth_register_button"),
              or: t(locale, "auth_or"),
              google: t(locale, "auth_google"),
              facebook: t(locale, "auth_facebook"),
              haveAccount: t(locale, "auth_have_account"),
              loginLink: t(locale, "auth_login_link"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

