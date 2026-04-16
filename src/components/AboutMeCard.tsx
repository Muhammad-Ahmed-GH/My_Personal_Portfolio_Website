type Props = {
  icon: string;
  title: string;
  text: string;
};

export default function AboutMeCard(props: Props) {
  return (
    <div className="max-w-full p-[55px_20px] border-1 border-card-border rounded-[var(--spacing-border-r)] text-center bg-card transition-[background_transform] duration-[var(--main-transition)] cursor-pointer hover:transform-[translateY(-5px)] hover:bg-card-hover ">
      <div className="flex justify-center items-center m-[0_auto_30px] w-[120px] max-w-full h-[120px] rounded-full text-primary bg-primary-transparent text-[4em]">
        <i className={props.icon}></i>
      </div>
      <h3 className="mb-[21px] text-heading font-rufina text-[25px] capitalize ">
        {props.title}
      </h3>
      <p className="text-text-light leading-[2] ">{props.text}</p>
    </div>
  );
}
