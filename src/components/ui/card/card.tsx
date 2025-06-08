import { cn } from "@/lib/utils";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("rounded-2xl shadow-sm", className)} {...props} />
);