import { cn } from "@/lib/utils";

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("p-4", className)} {...props} />
);