import { useAppSelector } from "@/hooks/useAppSelector";
import { createPortal } from "react-dom";

interface ModalProps {
  modalName: string;
  children: React.ReactNode;
}

const Modal = ({ modalName, children }: ModalProps) => {
  const { modals } = useAppSelector((state) => state.modals);

  return modals[modalName]
    ? createPortal(
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary rounded-lg">
          {children}
        </div>,
        document.body
      )
    : null;
};

export default Modal;
