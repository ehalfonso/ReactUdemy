import { PropTypes } from "prop-types";

export const FirstApp = ({ title, subTitle, name: name }) => {
  return (
    <>
      <div>
        <h1 data-testid="test=title">{title}</h1>
        <h2>{subTitle}</h2>
        <h2>{subTitle}</h2>
        <p>{name}</p>
      </div>
    </>
  );
};

FirstApp.protoType = {
  title: PropTypes.string.required,
  subTitle: PropTypes.string.required,
};

FirstApp.defaultProps = {
  name: "Eric Herrera",
  subTitle: "No hay subtitulo",
  //   title:"No hay titulo"
};
