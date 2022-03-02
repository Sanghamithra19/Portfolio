const CardContainer = (props: any) => {
  return (
    <div
      className={`tw-bg-zinc-50 tw-mx-4 tw-p-10 tw-rounded-2xl tw-shadow-2xl tw-w-full ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default CardContainer;
