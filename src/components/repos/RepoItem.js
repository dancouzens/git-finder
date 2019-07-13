import React from "react";
import PropTypes from "prop-types";
import styles from "./Repos.module.css";

const RepoItem = ({ repo }) => {
  const { Card } = styles;
  return (
    <div className={Card}>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
