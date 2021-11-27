import './ConfirmModal.scss';
import React, { FC } from 'react';
import Portal from './Portal';
import { RiCloseFill } from 'react-icons/ri';

type ConfirmModalProps = {
  close: () => void;
  onConfirm: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({
  children,
  close,
  onConfirm,
}) => {
  return (
    <Portal>
      <div className="modal">
        <div className="modal__wrapper">
          <button className="modal__close-btn" onClick={close}>
            <RiCloseFill size={24} />
          </button>
          <div>{children}</div>
          <div className="modal__button-wrapper">
            <button className="modal__cancel-btn" onClick={close}>
              취소
            </button>
            <button className="modal__confirm-btn" onClick={onConfirm}>
              확인
            </button>
          </div>
        </div>
        <div className="modal__overlay" onClick={close}></div>
      </div>
    </Portal>
  );
};

export default ConfirmModal;
