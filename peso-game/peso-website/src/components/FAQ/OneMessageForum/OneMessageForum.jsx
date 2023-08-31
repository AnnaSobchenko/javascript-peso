import s from "./OneMessageForum.module.scss";
import Image from "next/image";
import MessageInfo from "../MessageInfo/MessageInfo";

const OneMessageForum = ({
  isAnswer,
  UserImage,
  user,
  nameUser,
  date,
  topicText,
}) => {
  return (
    <div className={s.forum__onemessage}>
      <div
        className={
          (isAnswer && `${s.forum__onemessage__horiz}`) ||
          `${s.forum__onemessage_horavatar}`
        }
      >
        <div
          className={
            (isAnswer && `${s.forum__onemessage_avatar_answer}`) ||
            `${s.forum__onemessage_avatar}`
          }
        >
          <Image
            src={UserImage}
            width={45}
            height={45}
            alt="userAvatar"
            className={s.forum__onemessage_svg}
          />
          <div className={s.forum__onemessage_line_answer_vert}></div>
        </div>
      </div>
      <MessageInfo
        user={user}
        nameUser={nameUser}
        date={date}
        text={topicText}
      />
    </div>
  );
};

export default OneMessageForum;
