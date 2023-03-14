import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import theme from "src/utils/theme/theme";

const MainContainer = styled(Container)(({theme})=>({
    backgroundColor: 'blue',
    width: '500px',
    height: '500px'
}))


const MyBox = styled(Box)(({theme}) => ({
    display: 'flex',
    color: 'blue',

}));

const ContainerBox = styled(Container)`
   
`



const ProfilePage = () => {
  return (
    <MainContainer>
      <ContainerBox>
        <MyBox>
            <Typography>BOX</Typography>
        </MyBox>
      </ContainerBox>
      <Container>

      </Container>
    </MainContainer>
  );
};

export default ProfilePage;
