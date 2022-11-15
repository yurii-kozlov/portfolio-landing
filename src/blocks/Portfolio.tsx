/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */
export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio page__portfolio">
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

                  <a className="portfolio__example" href="#liberty">
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
