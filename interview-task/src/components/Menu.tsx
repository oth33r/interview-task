import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Button } from "./ui/button";
import { openModal } from "@/store/slices/modalSlice";
import ChangePasswordModal from "./Modals/ChangePassword";
import Modal from "./Modals/Modal";
import NewArticle from "./Modals/NewArticle";

const Menu = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-primary rounded-xl h-fit px-2 py-4 space-y-2">
      <Button
        variant={"secondary"}
        onClick={() => dispatch(openModal("changePassword"))}
      >
        Change password
      </Button>
      <Button
        variant={"secondary"}
        onClick={() => dispatch(openModal("addNewModal"))}
      >
        Add new article
      </Button>
      <Modal modalName="changePassword">
        <ChangePasswordModal modalName="changePassword" />
      </Modal>
      <Modal modalName="addNewModal">
        <NewArticle modalName="addNewModal" />
      </Modal>
    </div>
  );
};

export default Menu;
