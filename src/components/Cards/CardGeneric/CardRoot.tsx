import React, { ReactNode } from "react";

import { cn } from "@/Utils/cn";

type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function CardRoot({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn("rounded-lg bg-white-100 p-6 shadow-lg", className)}
    >
      {children}
    </div>
  );
}
