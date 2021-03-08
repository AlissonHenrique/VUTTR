import { BgModal } from "./styles";
import { GrFormClose } from "react-icons/gr";

function ModalRemove() {
  return (
    <BgModal>
      <div className="container-modal">
        <div className="header-modal">
          <h4>Remove tool</h4>
          <GrFormClose size={20} color="#8F8A9B" />
        </div>
        <p>
          Are you sutre you want to remove <b>hotel?</b>
        </p>
      </div>
    </BgModal>
  );
}

export default ModalRemove;
