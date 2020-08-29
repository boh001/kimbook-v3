import { useSelector } from "react-redux";

export default (type) => {
  const loading = useSelector((state) => state.loading);
  const isLoading = loading[type];
  return isLoading;
};
