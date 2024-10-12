import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Button } from "./ui/button";
import { openModal } from "@/store/slices/modalSlice";
import ChangePasswordModal from "./Modals/ChangePasswordModal";

const Menu = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-primary rounded-xl h-fit px-2 py-4">
      <Button
        variant={"secondary"}
        onClick={() => dispatch(openModal("changePassword"))}
      >
        Change password
      </Button>
      <ChangePasswordModal modalName="changePassword" />
    </div>
  );
};

export default Menu;
