import React, { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"button">;

export default function Button({ className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`bg-gray-200 text-black px-4 py-2 rounded-tl-full rounded-br-full rounded-lg whitespace-nowrap ${className}`}
    />
  );
}
