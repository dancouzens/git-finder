import React from "react";
import style from "./User.module.css";
import PropTypes from "prop-types";

const UserItem = ({ users: { login, avatar_url, html_url } }) => {
  return (
    <div className={style.Card}>
      <img src={avatar_url} alt="user avatar" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <a href={html_url}>More</a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  users: PropTypes.object.isRequired
};

export default UserItem;
