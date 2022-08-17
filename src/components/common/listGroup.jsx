import React from "react";

const ListGroup = (props) => {
  const { items, selectedItem, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {/* <li
        className={
          selectedItem === "all" ? "list-group-item active" : "list-group-item"
        }
        onClick={() => props.onItemSelect("all")}
      >
        All Genres
      </li> */}
      {items.map((genre) => (
        <li
          key={genre[valueProperty] ? genre[valueProperty] : 1}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onItemSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
