import React, { Component } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Users from "./components/users/users/Users";
import Search from "./components/users/search/Search";
import Alert from "./components/layout/alert/Alert";
import style from "./App.module.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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
    const { users, loading, alert } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className={style.Container}>
          <Alert alert={alert} />
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
