import React from "react";
import style from "./Account.module.scss";
import arrow from "../../Img/icon/arrow.svg";

export default function Account(props) {
  return (
    <div>
      <div className={style.flexAccount}>
        <div className={style.avatarAccount} src={props.person.avatar} />
        <div className={style.textAccount}>{props.person.name}</div>
        <div className={style.textAccount}>{props.person.family}</div>
      </div>
    </div>
  );
}
