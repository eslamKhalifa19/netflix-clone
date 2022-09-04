import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import MuiModal from "@mui/material/Modal";
function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>Modal</>
    </MuiModal>
  );
}

export default Modal;
