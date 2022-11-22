import { useEffect, useState } from 'react';
import { CarouselOnDesktop } from '../CaroueselOnDesktop';
import { CarouselOnMobile } from '../CarouselOnMobile';
import { texts } from '../../api/texts';
import './Services.scss';
import './ContainerServices.scss';

const { introText } = texts;

export const Services = () => {
  const [isOnDesktop, setIsOnDesktop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth < 1024) {
        setIsOnDesktop(false);
      } else {
        setIsOnDesktop(true);
      }
    });
  });

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
                  {introText}
                </p>
              </div>
            </div>
          </div>
          <div className="services__content">

            {isOnDesktop && <CarouselOnDesktop />}

            {!isOnDesktop && <CarouselOnMobile />}
          </div>
        </div>
      </div>
    </section>
  );
};
