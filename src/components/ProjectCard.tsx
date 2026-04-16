import clsx from "clsx";

type Props = {
  icon: string;
  title: string;
  techStack: string[];
  status: "done" | "inProgress" | "canceled";
  githubRepo: string;
  liveDemo?: string;
};

export default function ProjectCard(props: Props) {
  const statusIconMap = {
    done: "fa-solid fa-circle-check",
    inProgress: "fa-solid fa-gear",
    canceled: "fa-solid fa-circle-xmark",
  };
  const statusTextMap = {
    done: "done",
    inProgress: "in progress",
    canceled: "canceled",
  };

  return (
    <div className="flex flex-col w-card-w max-w-full p-[20px_0_0] border-1 border-card-border rounded-[var(--spacing-border-r)] text-center bg-card transition-[background_transform] duration-[var(--main-transition)] cursor-pointer hover:transform-[translateY(-5px)] hover:bg-card-hover">
      <div className="flex justify-center items-center m-[0_auto_30px] w-[120px] max-w-full h-[120px] rounded-full text-primary bg-primary-transparent text-[4em]">
        <i className={props.icon}></i>
      </div>
      <div className="flex-1 flex flex-col items-center gap-[10px] p-[0_20px_30px]">
        <h3 className="text-center text-heading font-rufina text-[21px] leading-[1.4] capitalize">
          {props.title}
        </h3>
        <span className="text-text-light">{props.techStack.join(" | ")}</span>
        <div className="flex items-center gap-[7px] mt-[10px] capitalize">
          <i
            className={clsx(
              statusIconMap[props.status],
              props.status === "done"
                ? "text-green-700 dark:text-[#28b528]"
                : props.status === "inProgress"
                  ? "text-primary-light animate-spin [animation-duration:5s]"
                  : "text-red-900 dark:text-red-500",
            )}
          ></i>
          {statusTextMap[props.status]}
        </div>
        <a
          className="p-[7px_0] w-[120px] rounded-full text-center text-white transition-colors duration-[var(--main-transition)] mt-[15px] bg-black border-1 border-transparent hover:bg-white hover:text-black hover:border-black dark:hover:bg-[#181725] dark:hover:text-white dark:hover:border-transparent"
          href={props.githubRepo}
        >
          GitHub
        </a>
        {props.liveDemo ? (
          <a
            className="p-[7px_0] w-[120px] rounded-full text-center text-white transition-colors duration-[var(--main-transition)] border-1 border-transparent bg-primary hover:bg-white hover:text-primary hover:border-primary dark:hover:bg-primary-dark dark:hover:text-white dark:hover:border-transparent "
            href={props.liveDemo}
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}
