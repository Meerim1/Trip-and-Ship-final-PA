import React from "react";
import styled from "styled-components";

function SliderCard(props) {
  const { name } = props;
  return (
    <>
      <SliderCardHeader>
        <h5>{name}</h5>
      </SliderCardHeader>
      <SliderCardBody>
        <p>
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях.
        </p>
      </SliderCardBody>
      <SliderCardFooter />
    </>
  );
}

const SliderCardHeader = styled.div``;

const SliderCardBody = styled.div``;

const SliderCardFooter = styled.div``;

export default SliderCard;
