import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
};
export default function Cards({ className, children }: Props) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[50px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
