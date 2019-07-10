import React, { Component } from "react";
import style from "./Search.module.css";

class Search extends Component {
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({
      text: ""
    });
  };

  handleSearch = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.Form}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={this.state.text}
          onChange={this.handleSearch}
        />
        <input type="submit" value="search" className={style.Button} />
      </form>
    );
  }
}

export default Search;
