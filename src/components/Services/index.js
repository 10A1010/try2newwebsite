import React from "react";
import Icon1 from '../../images/svg-1.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
const Services = ({topLine1,topLine2,topLine3,headline1,headline2,headline3,description1,description2,description3,img1,img2,img3,id}) => {
  return (
    <ServicesContainer id={id}>
      <ServicesH1>{topLine1}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>{headline1}</ServicesH2>
          <ServicesP>{description1}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img2} />
          <ServicesH2>{headline2}</ServicesH2>
          <ServicesP>{description2}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img3} />
          <ServicesH2>{headline3}</ServicesH2>
          <ServicesP>{description3}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
