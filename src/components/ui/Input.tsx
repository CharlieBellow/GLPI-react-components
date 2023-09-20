import React, { forwardRef, useId } from "react";

import { cn } from "@/Utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * @description this work as placeholder and label, similar to Material UI
   */
  label: string;
  /**
   * @description this function receive a className and return a React JSX Element in left side of input
   */
  renderStartIcon?: (className: string) => React.JSX.Element;
  /**
   * @description this function receive a className and return a React JSX Element in right side of input
   */
  renderEndIcon?: (className: string) => React.JSX.Element;
  /**
   * @description this is the error message that will be displayed below the input
   */
  errorMessage?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      label,
      renderStartIcon,
      renderEndIcon,
      type,
      ...props
    },
    ref
  ) => {
    const randomId = useId();
    const inputId = props.id ?? randomId;

    const startIcon = renderStartIcon;
    const endIcon = renderEndIcon;

    const defaultIconsClassName = "h-5 w-5 shrink-0 px-px text-current";

    return (
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "flex items-center rounded-lg px-2 ring-1 h-10 transition-all group",
            {
              "focus-within:ring-primary-red ring-primary-red hover:ring-primary-red text-primary-red":
                errorMessage,
              "focus-within:ring-primary-blue ring-secondary-2 hover:ring-primary-blue text-black-text":
                !errorMessage,
            },
            className
          )}
        >
          {startIcon && startIcon(defaultIconsClassName)}

          <div className="relative h-full flex-1">
            <input
              {...props}
              id={inputId}
              type={type ?? "text"}
              ref={ref}
              className="peer h-full w-full bg-transparent px-2 text-base placeholder:text-transparent focus-visible:outline-none"
              placeholder={label}
              aria-invalid={!!errorMessage}
            />
            <label
              htmlFor={inputId}
              className={cn(
                "absolute -top-3 peer-placeholder-shown:left-0 -left-1 z-10 cursor-pointer peer-placeholder-shown:bg-transparent floating-label bg-white-100 px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2  text-base peer-placeholder-shown:scale-100 scale-[.85] peer-focus-visible:-top-3 peer-focus-visible:translate-y-0 peer-focus-visible:scale-[.85] peer-focus-visible:bg-white-100 peer-focus-visible:-left-1",
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

          {endIcon && endIcon(defaultIconsClassName)}
        </div>

        {errorMessage && (
          <span className="px-1 text-primary-red">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
