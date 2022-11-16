/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import '../styles/modal.scss';

type Props = {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>;
};

export const Modal: React.FC<Props> = ({ active, setActive }) => {
  return (
    <div
      className={classNames('modal', {
        'modal--active': active,
      })}
      onClick={() => setActive(false)}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>hellsdfsdfsdf</h1>
      </div>
    </div>
  );
};
