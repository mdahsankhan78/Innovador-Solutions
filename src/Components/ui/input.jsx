import * as React from "react"

import { cn } from "@/lib/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full text-primary-foreground border border-input bg-secondary px-3 py-6 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

const SearchInput = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border border-input pl-3 pr-10 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary",
          className
        )}
        ref={ref}
        {...props}
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" >
        <FontAwesomeIcon icon={faSearch} size={16} /> {/* Search icon */}
      </span>
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export { Input, SearchInput }
