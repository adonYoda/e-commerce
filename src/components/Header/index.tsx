import { Container, Divider, styled } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Nike from "../../assets/Images/Nike.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { height } from "@mui/system";

const Test = styled("div")((theme) => ({
  backgroundColor: "#17181F",
  width: "100%",
  height: "content",
}));
const StyledCarousel = styled(Carousel)((theme) => ({
  paddingTop: "30px",
  "& .carousel .slider-wrapper":{width: "100%"},
  //height: "570px",
  "& .carousel .slider":{height: "100%"}
  //   "& li":{listStyle: "none"},
  //   //listStyle: "none"
  //     display: "flex",
  //     flexWrap: "nowrap"
  //   //    justifyContent: "center",
}));

const Image = styled("img")((theme) => ({
  height: "100%",
  width: "100%",
}));

const ImageWrapper = styled("div")((theme) => ({
    width: "100%",
    height: "100%",
}))

const Header = () => {
  return (
    <Test>
      <Divider sx={{ filter: "invert(1)" }} />
      <Container>
        <StyledCarousel>
          <ImageWrapper>
            <Image src={Nike} alt="" />
            <p>NIKE1</p>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={Nike} alt="" />
            <p>NIKE2</p>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={Nike} alt="" />
            <p>NIKE3</p>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={Nike} alt="" />
            <p>NIKE4</p>
          </ImageWrapper>
        </StyledCarousel>
      </Container>
    </Test>
  );
};

export default Header;
