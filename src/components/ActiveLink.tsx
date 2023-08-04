import React, { AnchorHTMLAttributes } from "react";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/Utils/cn";

/**
 *
 * @description When the current path matches the href,the data-active property will be added to the link
 * use data-active to set the active class
 */

type ActiveLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {};

export const ActiveLink = React.forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ href, children, className, ...rest }, ref) => {
    const pathname = usePathname();
    const activeLink = pathname === href;

    return (
      <Link
        {...rest}
        href={href}
        data-active={activeLink}
        className={cn(className)}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

ActiveLink.displayName = "ActiveLink";
