import { Container, Divider, styled } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Nike from "../../assets/Images/Nike.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Test = styled("div")((theme) => ({
  backgroundColor: "#17181F",
  width: "100%",
  height: "content",
}));
const StyledCarousel = styled(Carousel)((theme) => ({
  paddingTop: "30px",
  //   "& li":{listStyle: "none"},
  //   //listStyle: "none"
  //     display: "flex",
  //     flexWrap: "nowrap"
  //   //    justifyContent: "center",
}));

const Image = styled("img")((theme) => ({
  height: "500px",
  width: "200px",
}));

const Header = () => {
  return (
    <Test>
      <Divider sx={{ borderWidth: "0.5px", borderColor: "white" }} />
      <Container>
        <StyledCarousel>
          <div>
            <Image src={Nike} alt="" />
            <p>NIKE1</p>
          </div>
          <div>
            <Image src={Nike} alt="" />
            <p>NIKE2</p>
          </div>
          <div>
            <Image src={Nike} alt="" />
            <p>NIKE3</p>
          </div>
          <div>
            <Image src={Nike} alt="" />
            <p>NIKE4</p>
          </div>
        </StyledCarousel>
      </Container>
    </Test>
  );
};

export default Header;
