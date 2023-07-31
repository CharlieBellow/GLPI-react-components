import { cn } from "@/Utils/cn";
import React, { ReactNode } from "react";

type CardContentProps = {
  children: ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function CardContent({
  className,
  children,
  ...rest
}: CardContentProps) {
  return (
    <div {...rest} className={cn("p-6 bg-secondary-2 rounded-lg", className)}>
      {children}
    </div>
  );
}
