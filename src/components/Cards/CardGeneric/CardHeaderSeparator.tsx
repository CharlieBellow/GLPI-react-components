import React from "react";

import { cn } from "@/Utils/cn";

type CardHeaderSeparatorProps = React.HtmlHTMLAttributes<HTMLHRElement>;

export default function CardHeaderSeparator({
  className,
  ...props
}: CardHeaderSeparatorProps) {
  return (
    <hr
      {...props}
      className={cn(
        "my-3 h-px w-full bg-gradient-to-r  from-transparent via-tertiary-1 via-50% to-transparent opacity-50",
        className
      )}
    />
  );
}
