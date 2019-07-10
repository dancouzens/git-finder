import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import style from "./App.module.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  searchUser = async text => {
    this.setState({
      loading: true
    });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);

    console.log(res.data.items);

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className={style.Container}>
          <Search searchUser={this.searchUser} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
