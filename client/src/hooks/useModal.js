import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalOpenAction, modalCloseAction } from "modules/reducers/modal";

export const useOpenModal = (type) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const isOpenModal = modal[type];
  const openModal = useCallback(() => {
    dispatch(modalOpenAction({ type }));
  }, [dispatch, type]);
  return [isOpenModal, openModal];
};
export const useCloseModal = (type) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(modalCloseAction({ type }));
  }, [dispatch, type]);
  return closeModal;
};
