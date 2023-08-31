import s from "./ReplyItemForum.module.scss";
import Image from "next/image";
import User from "public/assets/icon/user.png";
import MessageInfo from "../MessageInfo/MessageInfo";
const uuid = require("uuid");

const ReplyItemForum = ({ array }) => {
  return (
    <ul className={s.forum__replyitem}>
      {array.map((el) => (
        <li key={uuid.v4()} className={s.forum__replyitem_item}>
          <div className={s.forum__replyitem_lineanswer}>
            <div className={s.forum__replyitem_lineanswer_first}></div>
          </div>
          <div className={s.forum__replyitem_infotitle}>
            <div className={s.forum__replyitem_avatar}>
              <div className={s.forum__replyitem_line_horiz}></div>
              <Image
                src={User}
                width={45}
                height={45}
                alt="user"
                className={s.forum__replyitem_svg}
              />
            </div>
            <MessageInfo
              user={el.user}
              nameUser={el.nameUser}
              date={el.date}
              text={el.text}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReplyItemForum;
