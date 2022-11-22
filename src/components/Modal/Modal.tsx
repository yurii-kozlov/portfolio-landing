/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import { ModalProps } from '../../types/ModalProps';
import './Modal.scss';

export const Modal: React.FC<ModalProps> = (
  { active, setActive, children },
) => {
  return (
    <div
      className={classNames('modal', {
        'modal--active': active,
      })}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames('modal__content', {
          'modal__content--active': active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
