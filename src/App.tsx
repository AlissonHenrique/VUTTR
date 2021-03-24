import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globals";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
Modal.setAppElement("#root");
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
