const PreloaderComponents = () => {
  return (
    <div
      className={
        " w-screen h-screen bg-accent-background flex justify-center items-center flex-col "
      }
    >
      <ul className=" mt-7 md:mt-5">
        <li className=" inline-block w-2 h-2 rounded-full bg-accent-element-color mr-4 animate-pulse-slow1 "></li>
        <li className=" inline-block w-2 h-2 rounded-full bg-accent-element-color mr-4 animate-pulse-slow2 "></li>
        <li className=" inline-block w-2 h-2 rounded-full bg-accent-element-color mr-0 animate-pulse-slow3 "></li>
      </ul>
    </div>
  );
};

export default PreloaderComponents;
