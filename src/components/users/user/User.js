import React, { Component } from "react";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./User.module.css";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
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

    const { loading } = this.props;

    if (loading) return <Spinner />;

    const {
      Back,
      Failure,
      Success,
      User,
      Card,
      Image,
      InnerCardOne,
      InnerCardTwo,
      Html
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
      </div>
    );
  }
}

export default User;
