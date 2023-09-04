const MessageInfo = ({ user, nameUser, date, text }) => {
  return (
    <div>
      <div className=" flex items-center justify-start">
        <p className=" text-opacity-font-2 leading-snug ">{user}</p>
        <div className=" ml-2 mr-2 bg-opacity-font-2 h-4 w-px"></div>
        <p className=" text-opacity-font-2 leading-snug ">{nameUser}</p>
        <div className=" ml-2 mr-2 bg-opacity-font-2 h-4 w-px"></div>
        <p className=" text-opacity-font-2 leading-snug ">{date}</p>
      </div>
      <p className=" mb-12 leading-snug "> {text}</p>
    </div>
  );
};

export default MessageInfo;
