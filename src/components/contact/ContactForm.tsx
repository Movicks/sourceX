import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, User2, Briefcase, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Field } from "./Field";
import { inputClass } from "./inputClass";
import { contactSchema, ContactFormValues } from "./schema";
import { textareaClass } from "./textareaClass";

type ContactFormProps = {
  endpoint?: string;
  meta?: Record<string, string | number | boolean>;
};

export function ContactForm({
  endpoint = "https://pro-nodemailer.onrender.com/api/contact",
  meta,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      company: "",
      phone: "",
      message: "",
      website: "",
    },
    mode: "onTouched",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [lastSubmitAt, setLastSubmitAt] = useState(0);

  async function onSubmit(values: ContactFormValues) {
    setServerMessage("");
    setStatus("idle");

    const now = Date.now();
    if (now - lastSubmitAt < 6000) {
      setStatus("error");
      setServerMessage("Please wait a few seconds before trying again.");
      return;
    }
    setLastSubmitAt(now);

    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 12000);

    try {
      const { website, ...payload } = values;

      const body = {
        ...payload,
        ...(meta ? { meta } : {}),
        context: {
          page: typeof window !== "undefined" ? window.location.href : undefined,
          ts: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
        },
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: ac.signal,
      });

      clearTimeout(t);

      if (!res.ok) {
        throw new Error(await res.text().catch(() => `Request failed with ${res.status}`));
      }

      setStatus("success");
      setServerMessage("Thanks! We’ll reach out shortly to schedule your demo.");
      reset();
    } catch (err: unknown) {
      setStatus("error");
    
      // Narrow err safely
      let message = "Something went wrong. Please try again.";
    
      if (err && typeof err === "object" && "name" in err && "message" in err) {
        const e = err as { name: string; message: string };
        message =
          e.name === "AbortError"
            ? "Network timeout. Please check your connection and try again."
            : e.message || message;
      }
    
      setServerMessage(message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Email */}
      <Field label="Business Email" id="email" icon={<Mail className="h-4 w-4" />} error={errors.email?.message}>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          {...register("email")}
          className={inputClass(!!errors.email)}
        />
      </Field>

      {/* First / Last Name */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name" id="firstName" icon={<User2 className="h-4 w-4" />} error={errors.firstName?.message}>
          <input id="firstName" type="text" placeholder="Ada" autoComplete="given-name" {...register("firstName")} className={inputClass(!!errors.firstName)} />
        </Field>
        <Field label="Last Name" id="lastName" icon={<User2 className="h-4 w-4" />} error={errors.lastName?.message}>
          <input id="lastName" type="text" placeholder="Lovelace" autoComplete="family-name" {...register("lastName")} className={inputClass(!!errors.lastName)} />
        </Field>
      </div>

      {/* Job Title / Company */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Job Title" id="jobTitle" icon={<Briefcase className="h-4 w-4" />} error={errors.jobTitle?.message}>
          <input id="jobTitle" type="text" placeholder="Head of Support" {...register("jobTitle")} className={inputClass(!!errors.jobTitle)} />
        </Field>
        <Field label="Company" id="company" icon={<Building2 className="h-4 w-4" />} error={errors.company?.message}>
          <input id="company" type="text" placeholder="Chesta Inc." autoComplete="organization" {...register("company")} className={inputClass(!!errors.company)} />
        </Field>
      </div>

      {/* Phone */}
      <Field label="Phone (optional)" id="phone" icon={<Phone className="h-4 w-4" />} error={errors.phone?.message} hint="Include country code, e.g. +2348012345678">
        <input id="phone" type="tel" placeholder="+2348012345678" {...register("phone")} className={inputClass(!!errors.phone)} />
      </Field>

      {/* Message */}
      <Field label="Message" id="message" error={errors.message?.message} hint="Share goals, current tools, and timeline.">
        <textarea id="message" rows={5} placeholder="Tell us what success looks like for you…" {...register("message")} className={textareaClass(!!errors.message)} />
      </Field>

      {/* Honeypot */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 rounded-tl-full rounded-br-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span
            className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120px 120px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.25), transparent 60%)",
            }}
            onMouseMove={(e) => {
              const target = e.currentTarget as HTMLSpanElement;
              const rect = target.getBoundingClientRect();
              target.style.setProperty("--x", `${e.clientX - rect.left}px`);
              target.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
          />
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
          {isSubmitting ? "Sending…" : "Request your demo"}
        </motion.button>
      </div>

      {/* Alerts */}
      {status === "success" && (
        <div role="status" className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5" aria-hidden />
          <p className="text-sm">{serverMessage}</p>
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-rose-800">
          <AlertCircle className="mt-0.5 h-5 w-5" aria-hidden />
          <p className="text-sm">{serverMessage || "Something went wrong."}</p>
        </div>
      )}
    </form>
  );
}
