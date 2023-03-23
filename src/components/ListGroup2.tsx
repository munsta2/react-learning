import { useEffect, useState, useRef } from "react";

interface Props {
  list: Array<string>;
}

function ListGroup({ list }: Props) {
  const [todoText, setTodoText] = useState("");
  const [items, setItems] = useState(list);

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Side Effects / Lifecycle

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newItems = [...items, todoText];
    setItems(newItems);
    setTodoText("");
    // console.log("Submitted value:", inputValue);
  };
  //event handaler
  //   const handleClick = (event: MouseEvent, index: number) => {
  //     console.log(event);
  //     selectedIndex = index;
  //   };

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No items found </p>}
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              // setSelectedIndex(index);

              removeItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
        <input type="submit" value="add to list" />
      </form>
    </>
  );
}

export default ListGroup;
