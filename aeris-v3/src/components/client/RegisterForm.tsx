"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";

interface RegisterFormProps {
  locale: Locale;
  translations: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: string;
    terms: string;
    and: string;
    privacy: string;
    registerButton: string;
    or: string;
    google: string;
    facebook: string;
    haveAccount: string;
    loginLink: string;
  };
}

export function RegisterForm({ locale, translations }: RegisterFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Register submitted", formData);
    setIsLoading(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, password: value });
    if (formData.confirmPassword) {
      setPasswordMatch(value === formData.confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, confirmPassword: value });
    setPasswordMatch(formData.password === value);
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Social register with ${provider}`);
  };

  return (
    <>
      <form className="authForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" className="formLabel">
            {translations.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="formInput"
            placeholder="João Silva"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={isLoading}
          />
        </div>

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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            value={formData.password}
            onChange={handlePasswordChange}
            required
            disabled={isLoading}
            style={{ borderColor: !passwordMatch && formData.confirmPassword ? '#dc3545' : undefined }}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="confirmPassword" className="formLabel">
            {translations.confirmPassword}
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="formInput"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            disabled={isLoading}
            style={{ borderColor: !passwordMatch && formData.confirmPassword ? '#dc3545' : undefined }}
          />
          {!passwordMatch && formData.confirmPassword && (
            <span style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px' }}>
              {locale === "pt" ? "As palavras-passe não coincidem" : "Passwords don't match"}
            </span>
          )}
        </div>

        <div className="formGroup">
          <div className="checkboxGroup">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="formCheckbox"
              checked={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
              required
              disabled={isLoading}
            />
            <label htmlFor="terms" className="checkboxLabel">
              <span className="termsText">
                {translations.agreeTerms}{" "}
                <Link href="/terms">{translations.terms}</Link>{" "}
                {translations.and}{" "}
                <Link href="/privacy">{translations.privacy}</Link>
              </span>
            </label>
          </div>
        </div>

        <button type="submit" className="authButton" disabled={isLoading}>
          {isLoading ? (
            <>
              <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
              {locale === "pt" ? "Criando conta..." : "Creating account..."}
            </>
          ) : (
            translations.registerButton
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
          onClick={() => handleSocialRegister("Google")}
          disabled={isLoading}
        >
          <span>🔵</span>
          {translations.google}
        </button>
        <button
          type="button"
          className="socialButton"
          onClick={() => handleSocialRegister("Facebook")}
          disabled={isLoading}
        >
          <span>📘</span>
          {translations.facebook}
        </button>
      </div>

      <div className="authFooter">
        <p className="authFooterText">
          {translations.haveAccount}
          <Link href="/login" className="authFooterLink">
            {translations.loginLink}
          </Link>
        </p>
      </div>
    </>
  );
}

