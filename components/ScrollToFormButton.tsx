import type { AnchorHTMLAttributes, ReactNode } from "react";

type ScrollToFormButtonProps = {
  children: ReactNode;
  className: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function ScrollToFormButton({
  children,
  className,
  ...props
}: ScrollToFormButtonProps) {
  return (
    <a href="#eignung" className={className} {...props}>
      {children}
    </a>
  );
}
