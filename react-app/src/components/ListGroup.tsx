//need type of parameter for typescript
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  //Event handler, smirf, in typescript you need to specify type of parameter, hoover over other
  const handleClick = (event: MouseEvent) => console.log(event);

  // no for loop, convert each item to an item of a different type
  //below is them items in the array converted to the list items
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Not item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //needs key property to keep track of the items
          //to know which part needs to be updated
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
