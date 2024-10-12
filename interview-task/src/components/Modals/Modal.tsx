import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { addModal } from "@/store/slices/modalSlice";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  modalName: string;
  children: React.ReactNode;
}

const Modal = ({ modalName, children }: ModalProps) => {
  const { modals } = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addModal(modalName));
  }, [dispatch, modalName]);

  return modals[modalName]
    ? createPortal(
        <div className="absolute top-0 w-full h-screen flex justify-center items-center bg-primary/90">
          {children}
        </div>,
        document.body
      )
    : null;
};

export default Modal;
