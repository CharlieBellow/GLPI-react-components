import { cn } from "@/Utils/cn";
import { ReactNode } from "react";

type CardHeaderPros = {
  children: ReactNode;
  hasImage?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function CardHeader({
  className,
  hasImage = false,
  children,
  ...rest
}: CardHeaderPros) {
  return (
    <div
      {...rest}
      className={cn(
        "flex",
        hasImage && "items-end justify-between pl-2",
        className
      )}
    >
      {children}
    </div>
  );
}
