import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Event handler, smirf
  const handleClick = (event: MouseEvent) => console.log(event);

  // no for loop, convert each item to an item of a different type
  //below is them items in the array converted to the list items
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Not item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          //needs key property to keep track of the items
          //to know which part needs to be updated
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
