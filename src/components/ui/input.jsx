import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, Icon, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="relative flex items-center">
      {Icon && (
        <Icon
          className={cn(
            "absolute left-2 transition-colors",
            isFocused ? "fill-neutral-50" : "fill-neutral-500"
          )}
          size={24}
          weight="light"
        />
      )}
      <input
        type={type}
        className={cn(
          `flex h-11 w-full rounded-xl border border-neutral-500 bg-transparent px-2 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${
            Icon && "pl-9"
          }`,
          className
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
