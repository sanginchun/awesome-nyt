import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Portal: FC = (props) => {
  const modalEl = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(modalEl);

    return () => {
      modalRoot?.removeChild(modalEl);
    };
  }, []);

  return createPortal(props.children, modalEl);
};

export default Portal;
