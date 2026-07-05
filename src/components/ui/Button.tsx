import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 sm:min-h-0 sm:text-base md:text-base";

  const variants = {
    primary: "bg-teal text-navy shadow-lg hover:bg-teal-light hover:shadow-teal/20",
    secondary: "bg-navy text-white hover:bg-navy-light",
    outline:
      "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-teal hover:text-teal",
  };

  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
