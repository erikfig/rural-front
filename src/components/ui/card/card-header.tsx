import { CardHeaderComponent } from "./styles";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <CardHeaderComponent className={className} {...props}>
    <h4>{children}</h4>
  </CardHeaderComponent>
);