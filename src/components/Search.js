import React, { Component } from "react";
import ResultTable from "./ResultTable";

export default class Search extends Component {
  state = {
    feeders: [],
    selectedFeeder: "",
    searchKey: "",
    searchResult: "",
  };
  getStatus = () => {
    console.log();
  };

  search = () => {
    let baseUrl = this.state.selectedFeeder + this.state.searchKey;
    fetch(baseUrl, {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        this.setState({ searchResult: json });
      });
  };

  componentDidMount() {
    this.fetchFeeders();
  }

  fetchFeeders = () => {
    fetch("data/feeder.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        this.setState({ feeders: json.feeders });
      });
  };

  handleChange = (e) => {
    this.setState({ selectedFeeder: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div className="input-group" style={{ marginBottom: "10px" }}>
              <select
                className="form-control"
                id="urls"
                value={this.state.selectedFeeder}
                onChange={(e) =>
                  this.setState({ selectedFeeder: e.target.value })
                }
              >
                {this.state.feeders.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search "
                value={this.state.customer}
                onChange={(e) => this.setState({ searchKey: e.target.value })}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={this.search}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="row">
          <ResultTable data={this.state.searchResult.hits}></ResultTable>
        </div>
      </div>
    );
  }
}
