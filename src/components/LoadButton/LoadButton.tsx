import './LoadButton.scss';
import React, { FC, MouseEventHandler } from 'react';

const LoadButton: FC<{ onClick: MouseEventHandler }> = ({ onClick }) => {
  return (
    <button className="load-button" onClick={onClick}>
      불러오기
    </button>
  );
};

export default LoadButton;
