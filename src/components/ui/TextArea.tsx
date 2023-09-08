import React, { ComponentProps, ElementRef, forwardRef, useId } from "react";

import { cn } from "@/Utils/cn";

type TextAreaProps = Omit<ComponentProps<"textarea">, "className"> & {
  /**
   * @description this work as placeholder and label, similar to Material UI
   */
  label: string;
  /**
   * @description this is the error message that will be displayed below the input
   */
  errorMessage?: string;
  /**
   * @description modify the root className
   */
  rootClassName?: string;
  /**
   * @description modify the textarea className
   */
  textareaClassName?: string;
};

export const TextArea = forwardRef<ElementRef<"textarea">, TextAreaProps>(
  (
    { rootClassName, textareaClassName, errorMessage, label, id, ...props },
    ref
  ) => {
    const randomId = useId();
    const inputId = id ?? randomId;

    return (
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "flex items-center rounded-lg px-2 ring-1 min-h-[80px] transition-all group relative",
            {
              "focus-within:ring-primary-red ring-primary-red hover:ring-primary-red text-primary-red":
                errorMessage,
              "focus-within:ring-primary-blue ring-secondary-2 hover:ring-primary-blue text-black-text":
                !errorMessage,
            },
            rootClassName
          )}
        >
          <textarea
            {...props}
            id={inputId}
            ref={ref}
            className={cn(
              "peer h-full w-full bg-transparent px-2 text-base placeholder:text-transparent focus-visible:outline-none",
              textareaClassName
            )}
            placeholder={label}
            aria-invalid={!!errorMessage}
          />
          <label
            htmlFor={inputId}
            className={cn(
              "absolute -top-3 peer-placeholder-shown:left-2 left-2 z-10 cursor-pointer peer-placeholder-shown:bg-transparent floating-label bg-white-100 px-1 peer-placeholder-shown:top-1 text-base peer-placeholder-shown:scale-100 scale-[.85] peer-focus-visible:-top-3 peer-focus-visible:translate-y-0 peer-focus-visible:scale-[.85] peer-focus-visible:bg-white-100",
              {
                "text-primary-red": errorMessage,
                "peer-placeholder-shown:text-black-text/80 peer-focus-visible:text-primary-blue group-hover:text-primary-blue":
                  !errorMessage,
              }
            )}
          >
            {label}
          </label>
        </div>

        {errorMessage && (
          <span className="px-1 text-primary-red">{errorMessage}</span>
        )}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";
