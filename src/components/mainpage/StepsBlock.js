import React from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import StepCard from "./StepCard";
import { RegistrationIcon, RequestIcon, OfferIcon, CallIcon, ReviewIcon, TruckIcon } from "../../components";

function StepsBlock() {
  return (
    <SFlexWrapper>
      <StepCard icon={<RegistrationIcon />} number="1" header="Зарегистрируйтесь" />
      <StepCard icon={<RequestIcon />} number="2" header="Оставьте заявку" />
      <StepCard icon={<OfferIcon />} number="3" header="Получайте предложения" />
      <StepCard icon={<CallIcon />} number="4" header="Согласуйте цену" />
      <StepCard icon={<TruckIcon />} number="5" header="Отправьте посылку" />
      <StepCard icon={<ReviewIcon />} number="6" header="Оставьте отзыв" />
    </SFlexWrapper>
  );
}

const SFlexWrapper = styled.div`

display: flex;
justify-content:center;
flex-wrap:wrap;
`;

export default StepsBlock;
