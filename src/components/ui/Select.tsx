"use client";

import React, { ComponentPropsWithoutRef } from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import { CaretDown, Check } from "@/components/icons";

import { cn } from "@/Utils/cn";

type FieldSelectProps = {
  /**
   * @description the list of items to be displayed
   */
  options: Array<{ id: string; label: string }>;
  /**
   * @description the label to be displayed, similar to placeholder
   */
  label: string;
  /**
   * @description this is the error message that will be displayed below the input
   */
  errorMessage?: string;
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

export function Select({
  errorMessage,
  options,
  label,
  ...props
}: FieldSelectProps) {
  return (
    <div
      className={cn("flex flex-col gap-1", {
        "text-black-text": !errorMessage,
        "text-primary-red": errorMessage,
      })}
      tabIndex={-1}
    >
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          className={cn(
            "flex w-full items-center [&>span]:text-base justify-between rounded-lg ring-1 bg-white-100 px-4 placeholder:text-secondary-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-current transition-all h-10",
            {
              "ring-primary-red hover:ring-primary-red": errorMessage,
              "hover:ring-primary-blue ring-secondary-2 focus-visible:ring-primary-blue":
                !errorMessage,
            }
          )}
        >
          <SelectPrimitive.Value placeholder={label} />
          <SelectPrimitive.Icon asChild>
            <CaretDown className="h-4 w-4 text-current" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            className="text-popover-foreground data-[state=open]:fade-in- 0 relative z-50 max-h-40 min-w-[8rem] overflow-y-auto rounded-lg border bg-white-100 shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            {...props}
          >
            <SelectPrimitive.Viewport className="h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] overflow-y-auto p-1">
              {options.map((item) => (
                <SelectPrimitive.Item
                  key={item.id}
                  value={item.id}
                  className="relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-2 pr-8 outline-none hover:bg-secondary-2 focus:bg-secondary-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                    <SelectPrimitive.ItemIndicator>
                      <Check className="h-4 w-4" />
                    </SelectPrimitive.ItemIndicator>
                  </span>
                  <SelectPrimitive.ItemText>
                    {item.label}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {errorMessage && (
        <span className="px-1 text-primary-red">{errorMessage}</span>
      )}
    </div>
  );
}
