import { useEffect, useState } from 'react';

/* eslint-disable no-console */
export const Services = () => {
  const [isOnDesktop, setIsOnDesktop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(`${document.documentElement.clientWidth}`);
      if (document.documentElement.clientWidth < 1024) {
        setIsOnDesktop(false);
      } else {
        setIsOnDesktop(true);
      }
    });
  });

  console.log(isOnDesktop);

  return (
    <section className="services" id="services">
      <div className="container1">
        <div className="services__all">
          <div className="services__intro">
            <h5 className="services__title">services</h5>
            <h1 className="
              services__subtitle services__subtitle--color_white
              "
            >
              What Can I Do For You?
            </h1>
            <div className="grid">
              <div className="grid__item grid__item--1-12">
                <p className="
                  services__small-description
                  services__small-description--color_white"
                >
                  Lorem ipsum Do commodo in proident enim in dolor
                  cupidatat adipisicing dolore officia nisi aliqua incididunt Ut
                  veniam lorem ipsum Consectetur ut in in eu do.
                </p>
              </div>
            </div>
          </div>
          <div className="services__content">

            {isOnDesktop && (
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
                                Sed ut perspiciatis unde omnis
                                iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
                                Sed ut perspiciatis unde omnis
                                iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
            ) }

            {!isOnDesktop && (
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

                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                      className="carousel__indicator"
                    />

                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                      className="carousel__indicator"
                    />

                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                      className="carousel__indicator"
                    />

                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="5"
                      className="carousel__indicator"
                    />

                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="grid__service-mobile">
                        <div className="grid__item grid__service-mobile--1-4">
                          <div
                            className="services__card"
                          >
                            <span className="services__icon">
                              <i className="fa-solid fa-earth-europe" />

                            </span>
                            <div className="services__description">
                              <h3 className="services__name">Webdesign</h3>
                              <p className="services__description">
                                Sed ut perspiciatis unde omnis
                                iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="grid__service-mobile">
                        <div className="grid__item grid__service-mobile--1-4">
                          <div className="services__card">
                            <span className="services__icon">
                              <i className="fa-solid fa-window-restore" />
                            </span>
                            <div className="services__description">
                              <h3 className="services__name">
                                Web Development
                              </h3>
                              <p className="services__description">
                                Sed ut perspiciatis unde omnis
                                iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="grid__service-mobile">
                        <div className="grid__item grid__service-mobile--1-4">
                          <div className="services__card">
                            <span className="services__icon">
                              <i className="fa-solid fa-brush" />
                            </span>
                            <div className="services__description">
                              <h3 className="services__name">Branding</h3>
                              <p className="services__description">
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="grid__service-mobile">
                        <div className="grid__item grid__service-mobile--1-4">
                          <div
                            className="services__card"
                          >
                            <span className="services__icon">
                              <i className="fa-solid fa-toggle-on" />
                            </span>
                            <div className="services__description">
                              <h3 className="services__name">UI/UX Design</h3>
                              <p className="services__description">
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="grid__service-mobile">
                        <div className="grid__item grid__service-mobile--1-4">
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
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="grid__service-mobile">
                        <div className="grid__item grid__service-mobile--1-4">
                          <div className="services__card">
                            <span className="services__icon">
                              <i className="fa-regular fa-comments" />
                            </span>
                            <div className="services__description">
                              <h3 className="services__name">Consultancy</h3>
                              <p className="services__description">
                                Sed ut perspiciatis unde
                                omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit.
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
