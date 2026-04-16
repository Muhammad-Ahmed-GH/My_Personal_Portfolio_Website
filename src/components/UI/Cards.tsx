import type { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};
export default function Cards({ children }: Props) {
  return <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[50px]">{children}</div>;
}
