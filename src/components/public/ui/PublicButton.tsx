import Link from "next/link";
import type { Route } from "next";

type PublicButtonVariant = "primary" | "secondary" | "ghost" | "github";

type PublicButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: PublicButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
};

export function PublicButton({
  children,
  href,
  variant = "secondary",
  className = "",
  onClick,
  type = "button",
  external,
}: PublicButtonProps) {
  const variantClass =
    variant === "primary"
      ? "public-btn-primary"
      : variant === "ghost"
        ? "public-btn-ghost"
        : variant === "github"
          ? "public-btn-github"
          : "";

  const base = `public-btn ${variantClass} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} className={base} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href as Route} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {children}
    </button>
  );
}
