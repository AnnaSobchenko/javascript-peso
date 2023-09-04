import s from "./MessageInfo.module.scss";

const MessageInfo = ({ user, nameUser, date, text }) => {
  return (
    <div className={s.forum__message_info}>
      <div className=" flex items-center justify-start">
        <p className=" text-opacity-font-2 leading-snug ">{user}</p>
        <div className=" ml-2 "></div>
        <p className=" text-opacity-font-2 leading-snug ">{nameUser}</p>
        <div className={s.forum__message_info_line}></div>
        <p className=" text-opacity-font-2 leading-snug ">{date}</p>
      </div>
      <p className=" mb-12 leading-snug "> {text}</p>
    </div>
  );
};

export default MessageInfo;
