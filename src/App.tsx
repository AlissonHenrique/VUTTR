import Home from "./pages/Home";

import { GlobalStyle } from "./styles/globals";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
Modal.setAppElement("#root");
export function App() {
  return (
    <>
      <Home />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;
