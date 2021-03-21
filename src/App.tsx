import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globals";
import Modal from "react-modal";
Modal.setAppElement("#root");
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
