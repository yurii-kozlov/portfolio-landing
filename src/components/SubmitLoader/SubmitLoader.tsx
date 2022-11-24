import './SubmitLoader.scss';

export const SubmitLoader = () => {
  return (
    <div className="submit-loader">
      <div className="submit-loader__text">Sending...</div>
      <div className="submit-loader__animation">
        <div className="
          submit-loader__animation-part
          submit-loader__animation-part--1
          "
        />
        <div className="
          submit-loader__animation-part
          submit-loader__animation-part--2
          "
        />
        <div className="
          submit-loader__animation-part
          submit-loader__animation-part--3
          "
        />
      </div>
    </div>
  );
};
