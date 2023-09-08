import React, { ComponentProps, ElementRef } from "react";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/Utils/cn";

type ActiveLinkProps = Omit<LinkProps, "className" | "children"> &
  Omit<ComponentProps<"a">, "className" | "children"> & {
    className?: string | (({ isActive }: { isActive: boolean }) => string);
    children:
      | React.ReactNode
      | (({ isActive }: { isActive: boolean }) => React.ReactNode);
  };

/**
 * Variant of the Next.js Link component to indicate if link is active.
 */
export const ActiveLink = React.forwardRef<ElementRef<"a">, ActiveLinkProps>(
  ({ href, children, className, ...rest }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const isFunctionClass = typeof className === "function";
    const isFunctionChildren = typeof children === "function";

    return (
      <Link
        {...rest}
        href={href}
        data-active={isActive}
        className={isFunctionClass ? className({ isActive }) : cn(className)}
        ref={ref}
      >
        {isFunctionChildren ? children({ isActive }) : children}
      </Link>
    );
  }
);
ActiveLink.displayName = "ActiveLink";
