import ReactDOM from "react-dom";

export default ({ children }) => {
  const element = document.getElementById("modal");
  return ReactDOM.createPortal(children, element);
};
