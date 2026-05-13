type PublicCardVariant = "default" | "highlight" | "violet";

type PublicCardProps = {
  children: React.ReactNode;
  variant?: PublicCardVariant;
  className?: string;
};

export function PublicCard({ children, variant = "default", className = "" }: PublicCardProps) {
  const variantClass =
    variant === "highlight" ? "public-card-highlight" : variant === "violet" ? "public-card-violet" : "";

  return <div className={`public-card ${variantClass} ${className}`}>{children}</div>;
}
