import React, { Component } from "react";
import Spinner from "../../layout/Spinner";
import Repos from "../../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./User.module.css";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    const {
      Back,
      Failure,
      Red,
      Green,
      Success,
      User,
      Card,
      SubCard,
      Image,
      InnerCardOne,
      InnerCardTwo,
      Html,
      Badge,
      Admin
    } = style;

    return (
      <div className={User}>
        <Link to="/" className={Back}>
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i id={Success} className="fas fa-check" />
        ) : (
          <i id={Failure} className="fas fa-times-circle" />
        )}
        <div className={Card}>
          <div className={InnerCardOne}>
            <img src={avatar_url} className={Image} alt="" />
            <h3>{name}</h3>
            <p>Location: {location}</p>
          </div>

          <div className={InnerCardTwo}>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className={Html}>
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong>
                    {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company: </strong>
                    {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website: </strong>
                    {login}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className={SubCard}>
          <div className={`${Badge} ${Red}`}>Followers: {followers}</div>
          <div className={`${Badge} ${Green}`}>Following: {following}</div>
          <div className={`${Badge} ${Red}`}> Public Repos: {public_repos}</div>
          <div className={`${Badge} ${Admin}`}>
            Public Gists: {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    );
  }
}

export default User;
