import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  const handleClose=()=>{
    props.onClose(false)
  }
  return <div className={classes.backdrop} onClick={handleClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.setIsClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;