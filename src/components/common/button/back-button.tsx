import ArrowLeft from "../../../assets/images/back.svg";
import React from "react";
import s from "./button.module.scss";
import { useNavigate } from "react-router";

interface Props {
  text: string;
}

const BackButton: React.FC<Props> = ({ text }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className={s.backContainer} onClick={goBack}>
      <img className="img-fluid arrowLeft" src={ArrowLeft} alt="Back" />
      <span>{text}</span>
    </button>
  );
};

export default BackButton;
