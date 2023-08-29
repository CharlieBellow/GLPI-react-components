import React, { ReactNode } from "react";

import { cn } from "@/Utils/cn";

type CardTitleProps = {
  children: ReactNode;
  variant?: "h2" | "h3" | "h4";
} & React.ComponentPropsWithoutRef<"h2" | "h3" | "h4">;

export default function CardTitle({
  className,
  children,
  variant = "h2",
  ...rest
}: CardTitleProps) {
  const Comp = variant;
  return (
    <Comp {...rest} className={cn("text-tertiary-2 text-xl font-semibold", className)}>
      {children}
    </Comp>
  );
}
