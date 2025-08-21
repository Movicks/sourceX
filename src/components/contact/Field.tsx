import React from "react";
import { AlertCircle } from "lucide-react";

type FieldProps = {
  label: string;
  id: string;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

export function Field({ label, id, icon, error, hint, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-800 dark:text-gray-200">
        {label}
      </label>
      <div
        className={[
          "group relative flex items-center rounded-xl border bg-white/80 shadow-sm ring-0 transition",
          "focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-200",
          error ? "border-rose-300 ring-rose-100" : "border-gray-200/80",
          "dark:bg-gray-900/60 dark:border-gray-700 dark:focus-within:border-indigo-500/70",
        ].join(" ")}
      >
        {icon && <div className="pointer-events-none pl-3 text-gray-500">{icon}</div>}
        <div className="w-full">{children}</div>
      </div>
      {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
      {error && (
        <p role="alert" className="flex items-center gap-1 text-xs font-medium text-rose-600">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}
