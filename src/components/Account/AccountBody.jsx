import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Account.module.scss";
export default function AccountBody(props) {
  return (
    <div className={style.tab}>
      <div className={style.flex}>
        <div className={style.avatar} src={props.person.avatar} />
        <div className={style.info}>{props.person.mail}</div>
      </div>
      <div className={style.link}>
        <NavLink to="">Выйти</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="">Настройки</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="">Помощь</NavLink>
      </div>
    </div>
  );
}
