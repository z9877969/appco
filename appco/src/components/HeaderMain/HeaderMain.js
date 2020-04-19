import React from "react";
import { NavLink } from "react-router-dom";
import css from "./headerMain.module.scss";

const HeaderMain = () => {
  return (
    <header className={css.container}>
      <div className={css.wrapperInfo}>
        <a href="https://google.com" className={css.logo}>
          AppCo
        </a>
        <h2 className={css.title}>
          <span className={css.bold}>Brainstorming</span>
          <span className={css.normal}> for desired perfect Usability</span>
        </h2>
        <p className={css.descr}>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <a href="#" className={css.vievStats}>
          View Stats
        </a>
      </div>
      <div className={css.image}>
        <div className={css.iphone}></div>
      </div>
    </header>
  );
};

export default HeaderMain;
