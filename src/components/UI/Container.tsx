import type { ReactNode } from "react";

export default function Container({children, className = ""}: {
  children: ReactNode | ReactNode[];
  className: string
}) {
  return (
    <div className={`container px-4 mx-auto 2xl:max-w-[73rem] ${className}`}>
      {children}
    </div>
  );
}
