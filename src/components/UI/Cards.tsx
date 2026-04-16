import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
};
export default function Cards({ className, children }: Props) {
  return (
    <div
      className={`flex justify-center flex-wrap gap-[50px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
