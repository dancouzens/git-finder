import React from "react";
import style from "./Alert.module.css";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={style.Alert}>
        <i className="fas fa-info-circle"> {alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
