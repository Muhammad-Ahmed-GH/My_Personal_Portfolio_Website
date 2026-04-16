type Props = {
  type: "email" | "phone";
  items: string[];
};
export default function ContactCard(props: Props) {
  const icon =
    props.type === "email" ? "fa-solid fa-envelope" : "fa-solid fa-phone-flip";
  const prefix = props.type === "email" ? "mailto:" : "tel:";

  return (
    <div className="max-w-full w-card-w p-[55px_20px] border-1 border-card-border rounded-[var(--spacing-border-r)] text-center bg-card transition-[background_transform] duration-[var(--main-transition)] cursor-pointer hover:transform-[translateY(-5px)] hover:bg-card-hover">
      <div className="flex justify-center items-center m-[0_auto_30px] w-[120px] max-w-full h-[120px] rounded-full text-primary bg-primary-transparent text-[4em]">
        <i className={icon}></i>
      </div>
      <h3 className="mb-[21px] text-heading font-rufina text-[25px] capitalize">{props.type}</h3>
      <ul className="flex flex-col gap-[10px]">
        {props.items.map((item) => (
          <li key={item}>
            <a
              className="text-text-light transition-colors duration-[var(--main-transition)] hover:text-[#252d3b] dark:hover:text-[#bdbdbd] block truncate"
              href={`${prefix}${item}`}
              target="_blank"
              rel="noopener"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
