import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <ToastContainer />
  </Provider>
);
