import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import styled from "styled-components";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SSlider>
        <Slider {...settings}>
          <SliderCard name="Бегайым Айтикеева" />
          <SliderCard name="Назар Токаев" />
          <SliderCard name="Мадина Аешева" />
          <SliderCard name="Канат Айткеев" />
          <SliderCard name="Бермет Абылова" />
          <SliderCard name="Нурсултан Назарбаев" />
        </Slider>
      </SSlider>
    );
  }
}

const SSlider = styled.div`
  width: 50%;
`;
