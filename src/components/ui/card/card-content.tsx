import { cn } from "@/lib/utils";
import { CardContentComponent } from "./styles";

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <CardContentComponent className={cn(className)} {...props} />
);