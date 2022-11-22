import './Carousel.scss';
import { texts } from '../../api/texts';

const { servicesDescription } = texts;

export const CarouselOnDesktop:React.FC = () => {
  return (
    <div className="services__carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="50000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active carousel__indicator"
          />
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            className="carousel__indicator"
          />

        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="grid">
              <div className="grid__item grid__item--1-4">
                <div
                  className="services__card"
                >
                  <span className="services__icon">
                    <i className="fa-solid fa-earth-europe" />

                  </span>
                  <div className="services__description">
                    <h3 className="services__name">Webdesign</h3>
                    <p className="services__description">
                      {servicesDescription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid__item grid__item--5-8">
                <div className="services__card">
                  <span className="services__icon">
                    <i className="fa-solid fa-window-restore" />
                  </span>
                  <div className="services__description">
                    <h3 className="services__name">
                      Web Development
                    </h3>
                    <p className="services__description">
                      {servicesDescription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid__item grid__item--9-12">
                <div className="services__card">
                  <span className="services__icon">
                    <i className="fa-solid fa-brush" />
                  </span>
                  <div className="services__description">
                    <h3 className="services__name">Branding</h3>
                    <p className="services__description">
                      {servicesDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="grid">
              <div className="grid__item grid__item grid__item--1-4">
                <div
                  className="services__card"
                >
                  <span className="services__icon">
                    <i className="fa-solid fa-toggle-on" />
                  </span>
                  <div className="services__description">
                    <h3 className="services__name">UI/UX Design</h3>
                    <p className="services__description">
                      {servicesDescription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid__item grid__item--5-8">
                <div className="services__card">
                  <span className="services__icon">
                    <i className="fa-solid fa-image" />
                  </span>
                  <div className="services__description">
                    <h3
                      className="services__name"
                    >
                      Graphics Design
                    </h3>
                    <p className="services__description">
                      {servicesDescription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid__item grid__item--9-12">
                <div className="services__card">
                  <span className="services__icon">
                    <i className="fa-regular fa-comments" />
                  </span>
                  <div className="services__description">
                    <h3 className="services__name">Consultancy</h3>
                    <p className="services__description">
                      {servicesDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
