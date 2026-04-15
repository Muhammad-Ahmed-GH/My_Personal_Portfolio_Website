type Props = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: string;
};

export default function MainButton(props: Props) {
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={`rounded-[var(--spacing-border-r)] w-[200px] z-0 font-medium text-center relative capitalize text-white p-[18px_0] bg-primary overflow-hidden before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0 before:bg-primary-dark before:-z-1 hover:before:w-full before:transition-[width] before:duration-700 before:ease-[cubic-bezier(0.47,1.8,0.17,0.53)] ${props.className ?? ""}`}
    >
      {props.children}
    </a>
  );
}
