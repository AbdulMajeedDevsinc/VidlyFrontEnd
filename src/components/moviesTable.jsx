import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  state = {};
  columns = [
    {
      label: "Title",
      path: "title",
      content: (movie) => {
        return <Link to={`/movies/${movie._id}`}>{movie.title}</Link>;
      },
    },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete{" "}
        </button>
      ),
    },
  ];

  render() {
    const { data, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={data}
        sortColumn={sortColumn}
        onSort={onSort}
      ></Table>
    );
  }
}

export default MoviesTable;
