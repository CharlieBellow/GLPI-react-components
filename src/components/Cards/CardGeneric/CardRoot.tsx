import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
export default function CardRoot({ children }: CardProps) {
  return (
    <div className="m-4 rounded-lg bg-white-100 p-4 shadow-lg">{children}</div>
  );
}
