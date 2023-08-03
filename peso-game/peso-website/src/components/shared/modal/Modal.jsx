const Modal = ({ active, children }) => {
  return (
    <div
      className={
        active
          ? "w-full h-screen bg-main-background z-10 transition pointer-events-auto opacity-100 fixed top-0 left-0  mt-[130px] md:mt-[180px] "
          : "w-full h-screen bg-main-background z-10 transition pointer-events-none opacity-0 fixed top-0 left-0"
      }
    >
      <div className=" bg-main-background h-screen">{children}</div>
    </div>
  );
};

export default Modal;
