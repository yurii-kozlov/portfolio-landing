/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */

// import classNames from 'classnames';
import { useState } from 'react';
import { Modal } from './Modal';

export const Portfolio = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <section id="portfolio" className="portfolio page__portfolio">

      <Modal active={isModalActive} setActive={setIsModalActive} />

      {/* <div className="portfolio__example-block">
        <div className="portfolio__example-block-media">
          <img
            className="portfolio__example-block-photo"
            src={require('../images/m-liberty.jpg')}
            alt="Liberty"
          />
        </div>
        <div className="portfolio__example-block-description">
          <h4 className="portfolio__example-block-title">
            Liberty
          </h4>
          <p className="portfolio__example-block-text">
            Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit.
          </p>
          <div className="portfolio__example-block-categories">
            Web Development
          </div>
        </div>
        <div className="portfolio__example-block-links">
          <a
            target="blank"
            href="http://www.behance.net"
            className="
              portfolio__example-block-link
              portfolio__example-block-link--left
            "
          >
            Details
          </a>
          <a
            href="/home"
            className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
          >
            close
          </a>
        </div>
      </div> */}

      <div className="container">
        <div className="portfolio__intro">
          <h5 className="portfolio__title">portfolio</h5>
          <h1 className="portfolio__subtitle">Check Out Some of My Works</h1>
          <p className="portfolio__intro-description">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua
            incididunt Ut veniam lorem ipsum
            Consectetur ut in in eu do.
          </p>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__gallery">
            <div className="portfolio__gallery-row">
              <div className="grid-no-gap">
                <div className="grid-no-gap__item grid-no-gap__item--1-6">
                  <div className="portfolio__image-container">
                    <img
                      className="portfolio__image"
                      src={require('../images/liberty.jpg')}
                      alt="Liberty"
                    />
                  </div>
                  <a
                    className="portfolio__example portfolio__example-liberty"
                    href="#"
                  >
                    <div className="portfolio__item">
                      <div className="portfolio__item-cell">
                        <h3 className="portfolio__example-name">Liberty</h3>
                        <span className="portfolio__description">
                          Graphic Design
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="grid-no-gap__item grid-no-gap__item--7-12">

                  <div className="portfolio__image-container">
                    <img
                      className="portfolio__image"
                      src={require('../images/shutterbug.jpg')}
                      alt="Shutterbug"
                    />
                  </div>

                  <a className="portfolio__example" href="#">
                    <div className="portfolio__item">
                      <div className="portfolio__item-cell">
                        <h3 className="portfolio__example-name">Shutterbug</h3>
                        <span className="portfolio__description">
                          Web Design
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="portfolio__gallery-row">
              <div className="grid-no-gap">
                <div className="grid-no-gap__item grid-no-gap__item--1-6">
                  <div className="portfolio__image-container">
                    <img
                      className="portfolio__image"
                      src={require('../images/beetle.jpg')}
                      alt="Beetle"
                    />
                  </div>

                  <a className="portfolio__example" href="#">
                    <div className="portfolio__item">
                      <div className="portfolio__item-cell">
                        <h3 className="portfolio__example-name">Beetle</h3>
                        <span className="portfolio__description">
                          Branding
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="grid-no-gap__item grid-no-gap__item--7-12">

                  <div className="portfolio__image-container">
                    <img
                      className="portfolio__image"
                      src={require('../images/clouds.jpg')}
                      alt="Clouds"
                    />
                  </div>

                  <a className="portfolio__example" href="#">
                    <div className="portfolio__item">
                      <div className="portfolio__item-cell">
                        <h3 className="portfolio__example-name">Clouds</h3>
                        <span className="portfolio__description">
                          Web Design
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="portfolio__gallery-row">
              <div className="grid-no-gap">
                <div className="grid-no-gap__item grid-no-gap__item--1-6">
                  <div className="portfolio__image-container">
                    <img
                      className="portfolio__image"
                      src={require('../images/salad.jpg')}
                      alt="Salad"
                    />
                  </div>

                  <a className="portfolio__example" href="#">
                    <div className="portfolio__item">
                      <div className="portfolio__item-cell">
                        <h3 className="portfolio__example-name">Salad</h3>
                        <span className="portfolio__description">
                          Branding
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="grid-no-gap__item grid-no-gap__item--7-12">

                  <div className="portfolio__image-container">
                    <img
                      className="portfolio__image"
                      src={require('../images/lighthouse.jpg')}
                      alt="Lighthouse"
                    />
                  </div>

                  <a className="portfolio__example" href="#">
                    <div className="portfolio__item">
                      <div className="portfolio__item-cell">
                        <h3 className="portfolio__example-name">Lighthouse</h3>
                        <span className="portfolio__description">
                          Web Development
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
