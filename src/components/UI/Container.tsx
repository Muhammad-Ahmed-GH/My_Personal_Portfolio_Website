import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
}

export default function Container({children, className = ""}: Props) {
  return (
    <div className={`container px-4 mx-auto 2xl:max-w-[73rem] ${className}`}>
      {children}
    </div>
  );
}
