import styled from 'styled-components';

const ThemeButton = ({ themeName, onClick }) => {
  return <ThemeButtonStyled onClick={onClick}>{themeName}</ThemeButtonStyled>
}

const ThemeButtonStyled = styled.div`
  background: black;
  border-radius: 10px;

  color: #FFFFFF;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  padding: 24px 16px;
`;

export default ThemeButton;