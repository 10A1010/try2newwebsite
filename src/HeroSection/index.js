import React, { useState } from "react";
import video from "../videos/video.mp4";
import { Button } from "../components/ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Islamic Resources in Somali</HeroH1>
        <HeroP>
          Listen To Audio From The Main Somali Shayookh on Quran Recitation,
          Quran Tafsiir, Hadith & Islamic Books
        </HeroP>
        <HeroBtnWrapper>
          <Button to='/signup' onMouseEnter={onHover} on onMouseLeave={onHover} primary='true' dark='true'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
