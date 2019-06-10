import React from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import StepCard from "./StepCard";

function StepsBlock() {
  return (
    <>
      <StepCard number="1" header="Зарегистрируйтесь" />
      <StepCard number="2" header="Оставьте заявку" />
      <StepCard number="3" header="Получайте предложения" />
      <StepCard number="4" header="Подтвердите предложение" />
    </>
  );
}

export default StepsBlock;
