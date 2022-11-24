/* eslint-disable no-console */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { texts } from '../../api/texts';
import { SubmitLoader } from '../SubmitLoader';
import { MessageSuccess } from '../MessageSuccess';
import { wait } from '../../helpers/wait';
import { schema } from '../../helpers/schema';
import { IFormInputs } from '../../types/IFormInputs';
import './Contact.scss';

const { introText } = texts;

export const Contact = () => {
  const [isFormSubmited, setisFormSubmitted] = useState<boolean>(false);
  const [isLoadingSumbit, setisLoadingSubmit] = useState<boolean>(false);

  const {
    register, reset, handleSubmit, formState: { errors },
  }
  = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    console.log(data);
    setisLoadingSubmit(true);
    await wait(1000);
    setisLoadingSubmit(false);
    setisFormSubmitted(true);

    return reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__intro">
          <h5 className="contact__title">contact</h5>
          <h1 className="contact__subtitle contact__subtitle--color_white">
            I&apos;d Love To Hear From You
          </h1>
          <div className="
            contact__small-description
            contact__small-description--color_white
            "
          >
            {introText}
          </div>
        </div>

        {!isFormSubmited ? (
          <div className="contact__form-block">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="#"
              className="contact__form"
              method="get"
            >
              <fieldset className="contact__form-fieldset">
                <div className="contact__form-field">
                  <input
                    id="contactName"
                    placeholder="Name"
                    {...register('contactName')}
                    className="contact__form-input"
                    type="text"
                  />
                  {errors.contactName ? (
                    <label
                      id="contactName-error"
                      className="contact__form-input-error"
                      htmlFor="contactName"
                    >
                      {errors.contactName?.message}
                    </label>
                  ) : ('')}

                </div>
                <div className="contact__form-field">
                  <input
                    id="contactEmail"
                    placeholder="Email"
                    {...register('contactEmail')}
                    className="contact__form-input"
                    type="email"
                  />

                  {errors.contactEmail ? (
                    <label
                      id="contactMessage-error"
                      className="contact__form-input-error"
                      htmlFor="contactEmail"
                    >
                      {errors.contactEmail?.message}
                    </label>
                  ) : ''}

                </div>
                <div className="contact__form-field">
                  <input
                    id="contactSubject"
                    placeholder="Subject"
                    name="contactSubject"
                    className="contact__form-input"
                    type="text"
                  />
                </div>
                <div className="contact__form-field">
                  <textarea
                    id="contactMessage"
                    placeholder="message"
                    {...register('contactMessage')}
                    name="contactMessage"
                    className="contact__form-textarea"
                    rows={10}
                    cols={50}
                  />

                  {errors.contactMessage ? (
                    <label
                      id="contactMessage-error"
                      className="
                              contact__form-textarea-error
                              contact__form-input-error
                              "
                      htmlFor="contactMessage"
                    >
                      {errors.contactMessage?.message}
                    </label>
                  ) : ''}

                </div>

                <div className="contact__form-field">
                  <button
                    type="submit"
                    className="contact__form-button"
                  >
                    Submit
                  </button>
                </div>
                {isLoadingSumbit && <SubmitLoader />}
              </fieldset>
            </form>
          </div>
        ) : <MessageSuccess />}

        <div className="contact__info">
          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="fa-solid fa-location-dot" />
            </div>

            <h5 className="contact__info-title">Where to find me</h5>

            <p className="contact__info-description">
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA
              <br />
              94043 US
            </p>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="fa-regular fa-envelope" />
            </div>

            <h5 className="contact__info-title">Email me at</h5>

            <p className="contact__info-description">

              someone@kardswebsite.com
              <br />
              info@kardswebsite.com
            </p>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="fa-solid fa-phone" />
            </div>

            <h5 className="contact__info-title">Call me at</h5>

            <p className="contact__info-description">

              Phone: (+63) 555 1212
              <br />
              Mobile: (+63) 555 0100
              <br />
              Fax: (+63) 555 0101
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
