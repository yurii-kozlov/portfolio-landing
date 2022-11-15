/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useState } from 'react';
import classNames from 'classnames';

/* eslint-disable jsx-a11y/anchor-is-valid */
export const Switcher = () => {
  const [isFrame, setIsFrame] = useState<boolean>(true);

  const handleRemoveFrame = () => setIsFrame(false);

  return (
    <div className={classNames('switchers',
      { 'switchers--display_none': !isFrame })}
    >
      <div className="switchers__list">
        <a
          className="switchers__link--left"
          href="https://www.dreamhost.com/r.cgi?287326"
          title="Fast Reliable Web Hosting"
        >
          Need Web Hosting?
        </a>

        <div className="switchers__right">
          <a
            href="https://www.styleshout.com/free-templates/kards/"
            className="switchers__link--right"
            title="Website Template Details and Download"
          >
            Details &amp; Download
          </a>

          <a
            className="switchers__close"
            href="#"
            title="Remove frame"
            onClick={handleRemoveFrame}
          />
        </div>
      </div>
    </div>
  );
};
