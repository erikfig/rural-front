import { cn } from "@/lib/utils";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn("px-4 py-2 border-b-1 border-gray-200", className)} {...props}>
    <h4 className="text-gray-400 truncate">{ children }</h4>
  </div>
);