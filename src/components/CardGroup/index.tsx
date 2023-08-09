"use client";

import { forwardRef } from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "@/Utils/cn";

type CardGroupProps = {
  label: string;
  icon: React.ElementType;
  href: string;
} & LinkProps &
  React.HTMLAttributes<HTMLAnchorElement>;

const CardGroup = forwardRef<HTMLAnchorElement, CardGroupProps>(
  ({ label, href, icon: Icon, className, ...rest }, ref) => {
    return (
      <Link
        {...rest}
        href={href}
        ref={ref}
        title={label}
        className={cn(
          "flex w-full cursor-pointer flex-col rounded-lg bg-white-ice p-4 text-light-bg shadow-card border-2 border-transparent hover:border-primary-blue hover:scale-105 transition-all hover:bg-white-ice/20 gap-3",
          className
        )}
      >
        <Icon size={27} className="shrink-0" />
        <p className="line-clamp-1 text-ellipsis text-sm font-medium lg:text-xl">
          {label}
        </p>
      </Link>
    );
  }
);

CardGroup.displayName = "CardGroup";

export default CardGroup;
