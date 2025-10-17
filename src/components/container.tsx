import { cn } from "@/lib/utils";
import React from "react";

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
