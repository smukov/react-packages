import { Button, Modal } from "ms-react-components";
import "ms-react-components/style.css";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Modal
        title="Test Dialog"
        icon={faInfo}
        buttons={[{ id: "close", label: "Close" }]}
        onButtonClick={() => {
          alert("pera!");
        }}
      >
        <p>Some text</p>

        <Button
          type="warning"
          onClick={() => {
            alert("hey");
            return false;
          }}
        >
          Click Me!
        </Button>
      </Modal>
    </div>
  );
};

export default App;
