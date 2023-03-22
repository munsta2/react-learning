import { useState } from "react";

function ListGroup() {
  let items = ["sudbury", "Toronto", "Montreal", "barrie", "soo"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handaler
  //   const handleClick = (event: MouseEvent, index: number) => {
  //     console.log(event);
  //     selectedIndex = index;
  //   };

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
