import type { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export default function SectionTitle(props: Props) {
  return (
    <h2 className="mb-[60px] text-heading text-center text-[2.6em] font-rufina capitalize">
      {props.children}
    </h2>
  );
}
