import s from "./ReplyItemForum.module.scss";
import Image from "next/image";
import User from "public/assets/icon/user.png";
import MessageInfo from "../MessageInfo/MessageInfo";
const uuid = require("uuid");

const ReplyItemForum = ({ array }) => {
  return (
    <ul className=" h-auto">
      {array.map((el) => (
        <li key={uuid.v4()} className={s.forum__replyitem_item}>
          <div className={s.forum__replyitem_lineanswer}>
            <div className={s.forum__replyitem_lineanswer_first}></div>
          </div>
          <div className=" flex items-start">
            <div className=" flex items-center">
              <div className=" h-[0.5px] border-accent-element-color border-[0.25px] w-[22.5px] bg-accent-element-color  "></div>
              <Image
                src={User}
                width={45}
                height={45}
                alt="user"
                className=" replyitem_svg p-1"
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
