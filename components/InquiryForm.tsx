"use client";

import { useState } from "react";
import { primaryBtn } from "./CTAButton";

export type Field =
  | {
      type: "text" | "email";
      name: string;
      placeholder: string;
      required?: boolean;
    }
  | {
      type: "select";
      name: string;
      placeholder: string;
      options: string[];
      required?: boolean;
    }
  | {
      type: "textarea";
      name: string;
      placeholder: string;
      rows?: number;
      required?: boolean;
    };

type Theme = "light" | "dark";

export default function InquiryForm({
  fields,
  submitLabel,
  note,
  theme = "light",
}: {
  fields: Field[];
  submitLabel: string;
  note?: string;
  theme?: Theme;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const set = (name: string, value: string) =>
    setValues((v) => ({ ...v, [name]: value }));

  const noteColor = theme === "dark" ? "text-white/60" : "text-spirulina-green/70";

  if (submitted) {
    return (
      <div
        className={`mx-auto flex max-w-[640px] flex-col items-center rounded-3xl bg-white px-12 py-16 text-center shadow-[0_20px_60px_-15px_rgba(21,64,72,0.15)] border border-spirulina-green/10`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-starburst-green/20 rounded-full blur-xl animate-pulse"></div>
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-starburst-green to-spirulina-green shadow-lg">
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </div>
        <h3 className="mt-6 font-section-headline font-extrabold text-[28px] uppercase text-spirulina-green">
          Thank you!
        </h3>
        <p className="mt-3 font-body text-[17px] text-spirulina-green/70">
          Your message has been received. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mx-auto max-w-[640px]"
    >
      <div className="flex flex-col gap-5">
        {fields.map((field) => {
          const required = field.required ?? true;
          const isFocused = focusedField === field.name;

          if (field.type === "select") {
            return (
              <div key={field.name} className="relative">
                <select
                  name={field.name}
                  aria-label={field.placeholder}
                  required={required}
                  value={values[field.name] ?? ""}
                  onChange={(e) => set(field.name, e.target.value)}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white rounded-2xl px-6 py-4 font-body text-[16px] text-spirulina-green border-2 transition-all duration-300 outline-none cursor-pointer
                    ${isFocused 
                      ? 'border-spirulina-green shadow-[0_0_0_4px_rgba(21,64,72,0.1)]' 
                      : 'border-spirulina-green/20 hover:border-spirulina-green/40'
                    } appearance-none -webkit-appearance-none`}
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23154048' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 20px center",
                    paddingRight: "56px",
                  }}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (field.type === "textarea") {
            return (
              <div key={field.name} className="relative">
                <textarea
                  name={field.name}
                  aria-label={field.placeholder}
                  placeholder={field.placeholder}
                  required={required}
                  rows={field.rows ?? 4}
                  value={values[field.name] ?? ""}
                  onChange={(e) => set(field.name, e.target.value)}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white rounded-2xl px-6 py-4 font-body text-[16px] text-spirulina-green border-2 transition-all duration-300 outline-none resize-none
                    ${isFocused 
                      ? 'border-spirulina-green shadow-[0_0_0_4px_rgba(21,64,72,0.1)]' 
                      : 'border-spirulina-green/20 hover:border-spirulina-green/40'
                    }`}
                />
              </div>
            );
          }

          return (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                name={field.name}
                aria-label={field.placeholder}
                placeholder={field.placeholder}
                required={required}
                value={values[field.name] ?? ""}
                onChange={(e) => set(field.name, e.target.value)}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-white rounded-2xl px-6 py-4 font-body text-[16px] text-spirulina-green border-2 transition-all duration-300 outline-none
                  ${isFocused 
                    ? 'border-spirulina-green shadow-[0_0_0_4px_rgba(21,64,72,0.1)]' 
                    : 'border-spirulina-green/20 hover:border-spirulina-green/40'
                  }`}
              />
            </div>
          );
        })}

        <button 
          type="submit" 
          className={`${primaryBtn} mt-4 w-full rounded-2xl px-8 py-4 font-subheadline font-medium text-[15px] uppercase tracking-[0.05em] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]`}
        >
          {submitLabel}
        </button>
      </div>

      {note && (
        <p className={`mt-6 text-center text-[15px] ${noteColor}`}>{note}</p>
      )}
    </form>
  );
}
