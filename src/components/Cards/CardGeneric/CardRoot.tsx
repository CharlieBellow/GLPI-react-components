import React, { ReactNode } from "react";

import { cn } from "@/Utils/cn";

type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function CardRoot({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn("m-4 rounded-lg bg-white-100 p-4 shadow-lg", className)}
    >
      {children}
    </div>
  );
}
