"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";

interface LoginFormProps {
  locale: Locale;
  translations: {
    email: string;
    password: string;
    remember: string;
    forgotPassword: string;
    loginButton: string;
    or: string;
    google: string;
    facebook: string;
    noAccount: string;
    signupLink: string;
  };
}

export function LoginForm({ locale, translations }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Login submitted", { email, password });
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
  };

  return (
    <>
      <form className="authForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="email" className="formLabel">
            {translations.email}
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

        <div className="formGroup">
          <label htmlFor="password" className="formLabel">
            {translations.password}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="formInput"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="formRow">
          <div className="checkboxGroup">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="formCheckbox"
              disabled={isLoading}
            />
            <label htmlFor="remember" className="checkboxLabel">
              {translations.remember}
            </label>
          </div>
          <Link href="/forgot-password" className="forgotLink">
            {translations.forgotPassword}
          </Link>
        </div>

        <button type="submit" className="authButton" disabled={isLoading}>
          {isLoading ? (
            <>
              <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
              {locale === "pt" ? "Entrando..." : "Signing in..."}
            </>
          ) : (
            translations.loginButton
          )}
        </button>
      </form>

      <div className="authDivider">
        <span className="authDividerText">{translations.or}</span>
      </div>

      <div className="socialButtons">
        <button
          type="button"
          className="socialButton"
          onClick={() => handleSocialLogin("Google")}
          disabled={isLoading}
        >
          <span>🔵</span>
          {translations.google}
        </button>
        <button
          type="button"
          className="socialButton"
          onClick={() => handleSocialLogin("Facebook")}
          disabled={isLoading}
        >
          <span>📘</span>
          {translations.facebook}
        </button>
      </div>

      <div className="authFooter">
        <p className="authFooterText">
          {translations.noAccount}
          <Link href="/register" className="authFooterLink">
            {translations.signupLink}
          </Link>
        </p>
      </div>
    </>
  );
}

