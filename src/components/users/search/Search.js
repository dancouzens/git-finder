import React, { Component } from "react";
import style from "./Search.module.css";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propType = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert(
        <>
          <p className={style.msg}>Please enter text</p>
        </>
      );
    } else {
      this.props.searchUser(this.state.text);
      this.setState({
        text: ""
      });
    }
  };

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    const { Form, ButtonOne, ButtonTwo } = style;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={Form}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.handleSearch}
          />
          <input type="submit" value="search" className={ButtonOne} />
        </form>
        {showClear && (
          <button className={ButtonTwo} onClick={clearUsers}>
            Clear
          </button>
        )}
      </>
    );
  }
}

export default Search;
