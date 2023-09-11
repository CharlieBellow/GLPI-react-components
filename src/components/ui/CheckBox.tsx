"use client";

import React, { ElementRef, forwardRef, useId } from "react";

import * as CheckBoxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/Utils/cn";

type CheckBoxProps = React.ComponentProps<typeof CheckBoxPrimitive.Root> & {
  label?: string;
  errorMessage?: string;
  labelId?: string;
};

export const CheckBox = forwardRef<
  ElementRef<typeof CheckBoxPrimitive.Root>,
  CheckBoxProps
>(({ className, errorMessage, label, labelId, ...props }, ref) => {
  const randomId = useId();
  const id = labelId ?? randomId;

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        {
          "text-primary-red": errorMessage,
          "text-primary-blue": !errorMessage,
        },
        className
      )}
    >
      <CheckBoxPrimitive.Root
        {...props}
        id={id}
        ref={ref}
        aria-invalid={!!errorMessage}
        className={cn(
          "rounded h-4 w-4 flex justify-center items-center focus-visible:ring-offset-1 focus-visible:outline-none focus-visible:ring-offset-white-100 text-current p-1 ring-1 data-[state=checked]:bg-primary-blue transition-colors",
          {
            "ring-primary-red hover:ring-primary-red focus-visible:ring-primary-red":
              errorMessage,
            "ring-primary-blue hover:ring-primary-blue focus-visible:ring-primary-blue":
              !errorMessage,
          }
        )}
      >
        <CheckBoxPrimitive.Indicator asChild>
          <span className="text-white-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="animated-svg shrink-0 font-bold"
            >
              <path d="M20 6L9 17L4 12" />
            </svg>
          </span>
        </CheckBoxPrimitive.Indicator>
      </CheckBoxPrimitive.Root>

      {label && (
        <label htmlFor={id} className="cursor-pointer text-sm text-current">
          {label}
        </label>
      )}
    </div>
  );
});

CheckBox.displayName = "CheckBox";
