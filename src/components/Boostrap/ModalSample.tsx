import Modal from "react-bootstrap/Modal";

const ModalSample: React.FC<{ handleOpenCart: () => void; show: boolean }> = ({
  handleOpenCart,
  show,
}) => {
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        position: "fixed",
        top: "100px",
        margin: "0px auto",
      }}
    >
      <Modal show={show} onHide={handleOpenCart}>
        <Modal.Header closeButton>
          <Modal.Title>⚠️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`You don't have any item in cart yet`.toUpperCase()}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSample;
