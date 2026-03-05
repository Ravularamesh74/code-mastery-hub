import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkPropsAdvanced extends Omit<NavLinkProps, "className" | "children"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  icon?: ReactNode;
  children?: ReactNode; // Explicitly ReactNode, not function
  end?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkPropsAdvanced>(
  (
    {
      className,
      activeClassName = "text-primary",
      pendingClassName = "opacity-60",
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={({ isActive, isPending }) =>
          cn(
            "group relative inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200",
            "text-muted-foreground hover:text-primary",
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
      >
        {icon && (
          <span className="transition-transform group-hover:scale-110">
            {icon}
          </span>
        )}

        {children && <span>{children}</span>}

        {/* animated underline */}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };