/* eslint-disable global-require */
import { AdvancedImage } from '@cloudinary/react';
import { useState } from 'react';
import { Modal } from '../Modal';
import '../../styles/page.scss';
import './Portfolio.scss';
import './grid-no-gap.scss';
import { texts } from '../../api/texts';
import { getImage } from '../../helpers/getImage';

const { introText, portfolioExampleDescription } = texts;

export const Portfolio = () => {
  const [isModalLibertyActive,
    setIsModalLibertyActive] = useState<boolean>(false);

  const [isModalShutterbergActive,
    setIsModalShutterbergActive] = useState<boolean>(false);

  const [isModalBeetleActive,
    setIsModalBeetleActive] = useState<boolean>(false);

  const [isModalCloudsActive,
    setIsModalCloudsActive] = useState<boolean>(false);

  const [isModalSaladActive,
    setIsModalSaladActvie] = useState<boolean>(false);

  const [isModalLightHouseActive,
    setIsModalLighthouseActive] = useState<boolean>(false);

  return (
    <section id="portfolio" className="portfolio page__portfolio">

      <Modal
        active={isModalLibertyActive}
        setActive={setIsModalLibertyActive}
      >
        <div className="portfolio__example-block">
          <div className="portfolio__example-block-media">
            <AdvancedImage
              cldImg={getImage('portfolio/m-liberty_cotdjr.jpg')}
              className="portfolio__example-block-photo"
              alt="Liberty"
            />
          </div>
          <div className="portfolio__example-block-description">
            <h4 className="portfolio__example-block-title">
              Liberty
            </h4>
            <p className="portfolio__example-block-text">
              {portfolioExampleDescription}
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
              onClick={() => setIsModalLibertyActive(false)}
              href="#libertyClose"
              className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
            >
              close
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        active={isModalShutterbergActive}
        setActive={setIsModalShutterbergActive}
      >
        <div className="portfolio__example-block">
          <div className="portfolio__example-block-media">
            <AdvancedImage
              cldImg={getImage('portfolio/m-shutterbug_fnxubp.jpg')}
              className="portfolio__example-block-photo"
              alt="Shutterberg"
            />
          </div>
          <div className="portfolio__example-block-description">
            <h4 className="portfolio__example-block-title">
              Shutterbug
            </h4>
            <p className="portfolio__example-block-text">
              {portfolioExampleDescription}
            </p>
            <div className="portfolio__example-block-categories">
              Web Design
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
              onClick={() => setIsModalShutterbergActive(false)}
              href="#shutterbergClose"
              className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
            >
              close
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        active={isModalBeetleActive}
        setActive={setIsModalBeetleActive}
      >
        <div className="portfolio__example-block">
          <div className="portfolio__example-block-media">
            <AdvancedImage
              cldImg={getImage('portfolio/m-beetle_apf5vl.jpg')}
              className="portfolio__example-block-photo"
              alt="Beetle"
            />
          </div>
          <div className="portfolio__example-block-description">
            <h4 className="portfolio__example-block-title">
              Beetle
            </h4>
            <p className="portfolio__example-block-text">
              {portfolioExampleDescription}
            </p>
            <div className="portfolio__example-block-categories">
              Branding
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
              onClick={() => setIsModalBeetleActive(false)}
              href="#beetleClose"
              className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
            >
              close
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        active={isModalCloudsActive}
        setActive={setIsModalCloudsActive}
      >
        <div className="portfolio__example-block">
          <div className="portfolio__example-block-media">
            <AdvancedImage
              cldImg={getImage('portfolio/m-clouds_lus8da.jpg')}
              className="portfolio__example-block-photo"
              alt="Clouds"
            />
          </div>
          <div className="portfolio__example-block-description">
            <h4 className="portfolio__example-block-title">
              Clouds
            </h4>
            <p className="portfolio__example-block-text">
              {portfolioExampleDescription}
            </p>
            <div className="portfolio__example-block-categories">
              Web Design
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
              onClick={() => setIsModalCloudsActive(false)}
              href="#cloudsClose"
              className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
            >
              close
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        active={isModalSaladActive}
        setActive={setIsModalSaladActvie}
      >
        <div className="portfolio__example-block">
          <div className="portfolio__example-block-media">
            <AdvancedImage
              cldImg={getImage('portfolio/m-salad_flco3t.jpg')}
              className="portfolio__example-block-photo"
              alt="Salad"
            />
          </div>
          <div className="portfolio__example-block-description">
            <h4 className="portfolio__example-block-title">
              Salad
            </h4>
            <p className="portfolio__example-block-text">
              {portfolioExampleDescription}
            </p>
            <div className="portfolio__example-block-categories">
              Branding
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
              onClick={() => setIsModalSaladActvie(false)}
              href="#saladClose"
              className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
            >
              close
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        active={isModalLightHouseActive}
        setActive={setIsModalLighthouseActive}
      >
        <div className="portfolio__example-block">
          <div className="portfolio__example-block-media">
            <AdvancedImage
              cldImg={getImage('portfolio/m-lighthouse_ueazkr.jpg')}
              className="portfolio__example-block-photo"
              alt="LightHouse"
            />
          </div>
          <div className="portfolio__example-block-description">
            <h4 className="portfolio__example-block-title">
              LightHouse
            </h4>
            <p className="portfolio__example-block-text">
              {portfolioExampleDescription}
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
              onClick={() => setIsModalLighthouseActive(false)}
              href="#lighthouseClose"
              className="
              portfolio__example-block-link
              portfolio__example-block-link--right
            "
            >
              close
            </a>
          </div>
        </div>
      </Modal>

      <div className="container">
        <div className="portfolio__intro">
          <h5 className="portfolio__title">portfolio</h5>
          <h1 className="portfolio__subtitle">Check Out Some of My Works</h1>
          <p className="portfolio__intro-description">
            {introText}
          </p>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__gallery">
            <div className="portfolio__gallery-row">
              <div className="grid-no-gap">
                <div className="grid-no-gap__item grid-no-gap__item--1-6">
                  <div className="portfolio__image-container">
                    <AdvancedImage
                      cldImg={getImage('portfolio/liberty_cnfkky.jpg')}
                      className="portfolio__image"
                      alt="Liberty"
                    />
                  </div>
                  <a
                    href="#liberty"
                    className="portfolio__example portfolio__example-liberty"
                    onClick={() => setIsModalLibertyActive(true)}
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
                    <AdvancedImage
                      className="portfolio__image"
                      cldImg={getImage('portfolio/shutterbug_xejmzu.jpg')}
                      alt="Shutterbug"
                    />
                  </div>

                  <a
                    className="portfolio__example"
                    href="#shutterberg"
                    onClick={() => setIsModalShutterbergActive(true)}
                  >
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
                      src={require('../../images/beetle.jpg')}
                      alt="Beetle"
                    />

                    <AdvancedImage
                      className="portfolio__image"
                      cldImg={getImage('portfolio/beetle_aws0f5.jpg')}
                      alt="Beetle"
                    />
                  </div>

                  <a
                    className="portfolio__example"
                    href="#beetle"
                    onClick={() => setIsModalBeetleActive(true)}
                  >
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
                      src={require('../../images/clouds.jpg')}
                      alt="Clouds"
                    />

                    <AdvancedImage
                      className="portfolio__image"
                      cldImg={getImage('portfolio/clouds_wlcvxy.jpg')}
                      alt="Clouds"
                    />
                  </div>

                  <a
                    className="portfolio__example"
                    href="#clouds"
                    onClick={() => setIsModalCloudsActive(true)}
                  >
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
                      src={require('../../images/salad.jpg')}
                      alt="Salad"
                    />
                    <AdvancedImage
                      className="portfolio__image"
                      cldImg={getImage('portfolio/salad_voai8w.jpg')}
                      alt="Salad"
                    />
                  </div>

                  <a
                    onClick={() => setIsModalSaladActvie(true)}
                    className="portfolio__example"
                    href="#salad"
                  >
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
                    <AdvancedImage
                      className="portfolio__image"
                      cldImg={getImage('portfolio/lighthouse_fwekva.jpg')}
                      alt="Lighthouse"
                    />
                  </div>

                  <a
                    onClick={() => setIsModalLighthouseActive(true)}
                    className="portfolio__example"
                    href="#lighthouse"
                  >
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
