import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export default function SectionSubTitle({ className, children }: Props) {
  return (
    <h2
      className={`mb-[60px] text-heading text-center text-[2.2em] font-rufina capitalize ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}
