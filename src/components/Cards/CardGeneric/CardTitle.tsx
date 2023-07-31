import { cn } from "@/Utils/cn";
import React, { ReactNode } from "react";

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
    <Comp
      {...rest}
      className={cn("text-tertiary-2", className)}
    >
      {children}
    </Comp>
  );
}
