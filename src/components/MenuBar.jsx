import styled from 'styled-components';

const MenuBar = () => {
  return(
    <BarStyle>
      <MenuStyle href="http://localhost:3000/secondary_shop">로그인</MenuStyle>
      <MenuStyle href="http://localhost:3000/secondary_shop">회원가입</MenuStyle>
      <MenuStyle href="http://localhost:3000/secondary_shop/Mypage">마이페이지</MenuStyle>
      <MenuStyle href="http://localhost:3000/secondary_shop/Payment">결제</MenuStyle>
    </BarStyle>
  )
}

const BarStyle = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;

  gap:10px;
  padding: 10px;
`;

const MenuStyle = styled.a`
  color: #FFFFFF;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  padding: 5px;
`;

export default MenuBar;