import Modal from "./modal";
import useModal from "./useModal";

export default function UseModalExample() {
  const { isOpen, toggle } = useModal();

  return (
    <div>
      <button onClick={toggle}>Open Modal</button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <h2>Modal Title</h2>
        <div>Yaay!!! Our Modal is rendered Properly.</div>
      </Modal>
    </div>
  );
}
