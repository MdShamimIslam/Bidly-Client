// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  // TODO: uncomment StrictMode
  // <StrictMode>
    <Provider store={store}>
      <ToastContainer
        theme="dark"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
        <App />
    </Provider>
  // </StrictMode>
);