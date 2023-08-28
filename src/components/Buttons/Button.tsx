import { ButtonHTMLAttributes, forwardRef } from "react";

import { tv, VariantProps } from "tailwind-variants";

import { Spinner } from "@/components/icons";
import * as Icon from "@/components/icons";

export const button = tv({
  base: "flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold shadow-button transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
  variants: {
    theme: {
      primary:
        "bg-primary-blue text-white-100 hover:bg-primary-blue/80 focus:bg-primary-blue/80 focus-visible:outline-primary-blue",
      secondary:
        "bg-tertiary-1 text-white-100 hover:bg-tertiary-1/80 focus-visible:outline-tertiary-1/80",
      tertiary:
        "bg-secondary-2 text-tertiary-1 hover:bg-secondary-2/80 focus-visible:outline-secondary-2",
      textOnly:
        "text-primary-blue shadow-none hover:underline focus-visible:outline-none",
      danger:
        "bg-primary-red text-white-100 hover:bg-primary-red/80 focus-visible:outline-primary-red",
      warning:
        "bg-danger text-tertiary-2 hover:bg-danger/80 focus-visible:outline-danger",
    },
    loading: {
      true: "pointer-events-none",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
    },
    size: {
      sm: "h-8 px-2",
      md: "h-11 px-4",
      lg: "h-12 px-6",
    },
  },
  defaultVariants: {
    size: "md",
    theme: "primary",
  },
});

type ButtonProps2 = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    isLoading?: boolean;
    /**
     * @deprecated Use `isLoading` instead for same functionality
     */
    isSubmitting?: boolean;
    /**
     * @deprecated pass `children` instead title
     */
    title?: string;
    /**
     * @deprecated pass children instead icon
     */
    icon?: Icon.IconProps;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps2>(
  (
    {
      size,
      theme,
      title,
      className,
      isLoading = false,
      isSubmitting = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const loading = isSubmitting || isLoading;
    return (
      <button
        {...props}
        ref={ref}
        className={button({
          size,
          theme,
          loading,
          disabled: disabled,
          className,
        })}
      >
        {loading ? (
          <Spinner size={20} className="animate-spin text-current" />
        ) : title ? (
          title
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
