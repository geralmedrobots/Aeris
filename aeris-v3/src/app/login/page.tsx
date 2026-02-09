import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";
import { LoginForm } from "@/components/client/LoginForm";
import { AuthBackground } from "@/components/client/AuthBackground";
import "../auth.css";

export default async function LoginPage() {
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
            <h1 className="authTitle">{t(locale, "auth_login_title")}</h1>
            <p className="authSubtitle">{t(locale, "auth_login_subtitle")}</p>
          </div>

          <LoginForm
            locale={locale}
            translations={{
              email: t(locale, "auth_email"),
              password: t(locale, "auth_password"),
              remember: t(locale, "auth_remember"),
              forgotPassword: t(locale, "auth_forgot_password"),
              loginButton: t(locale, "auth_login_button"),
              or: t(locale, "auth_or"),
              google: t(locale, "auth_google"),
              facebook: t(locale, "auth_facebook"),
              noAccount: t(locale, "auth_no_account"),
              signupLink: t(locale, "auth_signup_link"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

