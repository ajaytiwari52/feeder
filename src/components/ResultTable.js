import React, { Component } from "react";

export default class ResultTable extends Component {
  renderChannelName(channels) {
    console.log(this.props.data);
    var title = "";
    channels.map((channel) => {
      title += channel.name + "\n";
    });
    return title;
  }

  renderTableData() {
    if (this.props.data) {
      let feeds = [];

      console.log(this.props.data[0]);
      for (let i = 0; i < this.props.data.length; i++) {
        let feed = {};
        feed.title = this.props.data[i].title;
        feed.author = this.props.data[i].author;
        feeds.push(feed);
      }

      console.log(feeds);

      return feeds.map((feed, index) => {
        let { title, author } = feed;
        return (
          <tr key={index}>
            <td>{title}</td>
            <td>{author}</td>
            {/* <td>
              <ul
                title={this.renderChannelName(pack.channel)}
                style={{ cursor: "pointer" }}
              >
                {this.renderChannel(pack.channel)}
              </ul>
            </td> */}
          </tr>
        );
      });
    } else {
      return (
        <tr style={{ columnSpan: "2" }}>
          <td>Loading...</td>
          <td></td>
        </tr>
      );
    }
  }

  renderTableHeader() {
    let header = ["Title", "Author(Submission count)"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div className="col" style={{ marginTop: "10px" }}>
        <table id="packages" className="table table-bordered">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
            {/* <div className="col">{JSON.stringify(this.props.data)}</div> */}
          </tbody>
        </table>
      </div>
    );
  }
}
