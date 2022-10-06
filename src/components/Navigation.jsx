import styled from 'styled-components';

const Navigation = () => {
  return(
    <>
      <NavigationStyled>유민몰</NavigationStyled>
      <GrayLine />
    </>
  )
}

const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 20px;

  padding: 50px 0px 50px 500px;

  color:white;
  background-color: black;
  width: 100%;
`;

const GrayLine = styled.div`
  height: 1px;
  background: #EEEEEE;

`;

export default Navigation;