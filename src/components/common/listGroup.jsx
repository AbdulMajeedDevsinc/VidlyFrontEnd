import React from "react";

const ListGroup = ({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onItemSelect,
}) => {
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(genre)}
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
