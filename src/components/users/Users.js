import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import style from "./User.module.css";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={style.Grid}>
        {users.map(user => (
          <UserItem key={user.id} users={user} />
        ))}
      </div>
    );
  }
};

Users.propType = {
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
