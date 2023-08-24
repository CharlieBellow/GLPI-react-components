import React, { ReactNode } from "react";

import { cn } from "@/Utils/cn";

type CardContentProps = {
  children: ReactNode;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function CardContent({
  className,
  children,
  ...rest
}: CardContentProps) {
  return (
    <div {...rest} className={cn("p-6 rounded-lg", className)}>
      {children}
    </div>
  );
}
