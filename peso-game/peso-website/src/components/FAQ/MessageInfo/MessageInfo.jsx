import s from "./MessageInfo.module.scss";

const MessageInfo = ({ user, nameUser, date, text }) => {
  return (
    <div className={s.forum__message_info}>
      <div className={s.forum__message_info_information}>
        <p className={s.forum__message_info_text}>{user}</p>
        <div className={s.forum__message_info_line}></div>
        <p className={s.forum__message_info_text}>{nameUser}</p>
        <div className={s.forum__message_info_line}></div>
        <p className={s.forum__message_info_text}>{date}</p>
      </div>
      <p className={s.forum__message_info_text_answer}> {text}</p>
    </div>
  );
};

export default MessageInfo;
