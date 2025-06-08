import { CardComponent } from "./styles";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary";
}

export const Card = ({ className, ...props }: CardProps) => (
  <CardComponent className={className} {...props} />
);