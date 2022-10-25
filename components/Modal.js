import { Modal } from './styles';
import ReactDOM from "react-dom";

const Portal = ({children}) => {
const modalRoot = document.getElementById("portal");
  return ReactDOM.createPortal(children, modalRoot);
}

export default ({ children, toggleModal }) => (
  <Portal>
      <Modal.Container onClick={() => toggleModal()}>
        <Modal.Content>{children}</Modal.Content>
      </Modal.Container>
  </Portal>
);

