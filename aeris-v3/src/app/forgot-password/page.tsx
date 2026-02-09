"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../auth.css";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [locale] = useState<"pt" | "en">("pt"); // You can get this from your locale hook

  const translations = {
    pt: {
      title: "Recuperar Palavra-passe",
      subtitle: "Insira o seu email para receber instruções",
      email: "Email",
      sendButton: "Enviar Instruções",
      backToLogin: "← Voltar ao login",
      successTitle: "Email enviado!",
      successDesc: "Verifique a sua caixa de entrada para instruções de recuperação.",
    },
    en: {
      title: "Recover Password",
      subtitle: "Enter your email to receive instructions",
      email: "Email",
      sendButton: "Send Instructions",
      backToLogin: "← Back to login",
      successTitle: "Email sent!",
      successDesc: "Check your inbox for recovery instructions.",
    },
  };

  const t = translations[locale];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    setTimeout(() => {
      setSent(true);
    }, 500);
  };

  return (
    <div className="authPage">
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
            <h1 className="authTitle">{t.title}</h1>
            <p className="authSubtitle">{t.subtitle}</p>
          </div>

          {sent ? (
            <div className="successMessage">
              <h3>{t.successTitle}</h3>
              <p>{t.successDesc}</p>
            </div>
          ) : null}

          {!sent ? (
            <form className="authForm" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="email" className="formLabel">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="formInput"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <button type="submit" className="authButton" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
                    {locale === "pt" ? "Enviando..." : "Sending..."}
                  </>
                ) : (
                  t.sendButton
                )}
              </button>
            </form>
          ) : null}

          <div className="authFooter" style={{ borderTop: "none", paddingTop: 0 }}>
            <Link href="/login" className="backLink">
              {t.backToLogin}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

