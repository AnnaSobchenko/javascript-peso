// "use client";
import s from "./ThemesForum.module.scss";
import baseTheme from "../base.json";
import ThreeDots from "../../UI/ThreeVertDots/ThreeVertDots";
import TopicItemForum from "../TopicItemForum/TopicItemForum";
import { FC } from "react";
import { LngTextFCComponentsProps } from "@/interfaces/Props.interface";
const uuid = require("uuid");

const ThemesForum: FC<LngTextFCComponentsProps> = ({ lang, textTr }) => {
  const count = (array: string[]) => {
    let messages = 0;

    for (let i = 0; i < array.length; i = i + 1) {
      if (!!array[i].topicAnswer.length) {
        messages = messages + array[i].topicAnswer.length;
        for (let k = 0; k < array[i].topicAnswer.length; k = k + 1) {
          if (!!array[i].topicAnswer[k].topicReply.length) {
            messages = messages + array[i].topicAnswer[k].topicReply.length;
          }
        }
      }
    }
    return messages;
  };

  return (
    <div className={`layout default ${s.forum__themes}`}>
      <ul>
        {baseTheme.map((theme) => (
          <li key={uuid.v4()} className={s.forum__themes__item}>
            <div className={s.forum__themes__main}>
              <div className={s.forum__themes__line}></div>
              <h3 className={s.forum__themes__title}>
                {lang == "en" ? theme.titleEn : theme.titleUa}
              </h3>
            </div>

            <ul>
              {theme.topicTheme.map((topic) => (
                <li key={uuid.v4()} className={s.forum__themes__item_subtitle}>
                  <details className={s.forum__themes__item_details}>
                    <summary className={s.forum__themes__summary}>
                      <div className={s.forum__themes__subtitle}>
                        <div className="mr-5">
                          <ThreeDots />
                        </div>
                        <div className={s.forum__themes__btn}>
                          <p className={s.forum__themes__btn_text}>
                            {lang == "en" ? topic.subTitleEn : topic.subTitleUa}
                          </p>
                          <div className={s.forum__themes__update}>
                            <div className={s.forum__themes_desk}>
                              <p className={s.forum__themes__update_text}>
                                {textTr.faqDiscussions}
                                {topic.topicDiscussions.length}
                                &nbsp;
                              </p>
                              <p className={s.forum__themes__update_text}>
                                {textTr.faqMessages} &nbsp;
                                {count(topic.topicDiscussions)}
                                &nbsp;
                              </p>
                              <p className={s.forum__themes__update_text_tab}>
                                {textTr.faqLastUpdate} {topic.lastDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.forum__themes_mob}>
                        <p className={s.forum__themes__update_text_mob}>
                          {textTr.faqLastUpdate} {topic.lastDate}
                        </p>
                      </div>
                    </summary>
                    <TopicItemForum array={topic.topicDiscussions} />
                  </details>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemesForum;
