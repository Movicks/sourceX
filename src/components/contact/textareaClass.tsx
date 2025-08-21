export function textareaClass(hasError: boolean) {
    return [
      "w-full rounded-xl border-0 bg-transparent px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none",
      "resize-none min-h-[120px] align-top",
      "dark:text-gray-100",
      hasError ? "caret-rose-600" : "caret-indigo-600",
    ].join(" ");
  }
  