import { Theme, toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "bottom-right" as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light" as Theme,
};

const showToast = (message: string, type: "success" | "error" | "info") => {
  console.log(message);
  return <div>{toast[type](message, toastOptions)}</div>;
};

export { showToast };
