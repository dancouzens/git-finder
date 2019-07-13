import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Users from "./components/users/users/Users";
import Search from "./components/users/search/Search";
import Alert from "./components/layout/alert/Alert";
import About from "./components/pages/About";
import User from "./components/users/user/User";
import style from "./App.module.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
  };

  searchUser = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 3500);
  };

  render() {
    const { users, repos, user, loading, alert } = this.state;

    const { getUser, getUserRepos, searchUser, clearUsers, setAlert } = this;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className={style.Container}>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Alert alert={alert} />
                    <Search
                      searchUser={searchUser}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
