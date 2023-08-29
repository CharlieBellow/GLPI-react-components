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
      className: _className,
      errorMessage,
      label,
      renderStartIcon,
      renderEndIcon,
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
            "flex items-center rounded px-2 ring-1 ring-offset-2 focus-within:ring-offset-white-100 h-10 transition-colors",
            {
              "focus-within:ring-primary-red ring-primary-red text-primary-red":
                errorMessage,
              "focus-within:ring-primary-blue ring-secondary-2 text-black-text":
                !errorMessage,
            }
          )}
        >
          {startIcon && startIcon(defaultIconsClassName)}

          <div className="relative h-full flex-1">
            <input
              {...props}
              id={inputId}
              ref={ref}
              className="peer h-full w-full bg-transparent px-2 placeholder:text-transparent focus-visible:outline-none"
              placeholder={label}
            />
            <label
              htmlFor={inputId}
              className={cn(
                "absolute -top-3.5 left-1 z-10 cursor-pointer peer-placeholder-shown:bg-transparent bg-white-100 px-1 text-sm transition-all ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus-visible:-top-3.5 peer-focus-visible:translate-y-0 peer-focus-visible:text-sm peer-focus-visible:bg-white-100",
                {
                  "text-primary-red": errorMessage,
                  "peer-placeholder-shown:text-black-text/80": !errorMessage,
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
