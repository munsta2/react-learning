import Message from "./message";
import ListGroup from "./components/ListGroup";
import ListGroup2 from "./components/ListGroup2";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["sudbury", "Toronto", "Montreal", "barrie", "soo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisable, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClick={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        click me
      </Button>

      <ListGroup2 list={items} />
    </div>
  );
}

export default App;
