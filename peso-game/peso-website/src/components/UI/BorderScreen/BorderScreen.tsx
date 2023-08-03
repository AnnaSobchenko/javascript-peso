const BorderScreen = () => {
  return (
    <ul className=" relative w-full h-screen pointer-events-none">
      <li className=" absolute top-0 left-0 w-full h-[104px] bg-border-main-top bg-cover bg-no-repeat"></li>
      <li className=" absolute top-0 left-0 w-[104px] h-screen bg-border-main-left bg-cover  bg-no-repeat"></li>
      <li className=" absolute top-0 right-0 w-[104px] h-screen bg-border-main-right bg-cover bg-no-repeat"></li>
      <li className=" absolute bottom-0 left-0 w-full h-[104px] bg-border-main-bottom bg-contain"></li>
    </ul>
  );
};

export default BorderScreen;
