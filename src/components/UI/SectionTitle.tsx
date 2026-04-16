import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export default function SectionTitle({ className, children }: Props) {
  return (
    <h2
      className={`mb-[60px] w-fit mx-auto text-heading text-center text-[2.6em] font-rufina capitalize relative before:absolute before:top-[calc(100%+4px)] before:left-1/2 before:transform-[translateX(-50%)] before:h-[4px] before:w-[120%] before:bg-primary ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}
