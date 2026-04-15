type Props = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: string;
};

export default function AltButton(props: Props) {
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={`rounded-[var(--spacing-border-r)] w-[200px] z-0 font-medium text-center relative capitalize text-text-light p-[18px_0] bg-none overflow-hidden transition-colors duration-700 border-1 border-primary hover:text-white before:absolute before:top-0 before:left-0 before:right-0 before:h-0 before:bg-primary before:-z-1 hover:before:h-full before:transition-[height] before:duration-700 before:ease-[cubic-bezier(0.47,1.8,0.17,0.53)] ${props.className ?? ""}`}
    >
      {props.children}
    </a>
  );
}
