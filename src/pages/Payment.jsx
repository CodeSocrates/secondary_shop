import styled from 'styled-components';

const Basket = () => {
  return (
  <>
  <Header>
    <span>결제 페이지</span>
    <a href="http://localhost:3000/secondary_shop">🏠</a>
  </Header>
  <section>
    <span>구입 상품 : intel i9-12900ks</span>
    <hr></hr>
    <span>주소 : 경기도 김포시 풍무동</span>
    <hr></hr>
    <span>번호 : 010-4424-2242</span>
    <hr></hr>
    <span>카드사 : 우리카드</span>
    <hr></hr>
    <span>카드 번호 : 1211-●●●●-●●●●-1111</span>
    <hr></hr>
    <span>CVC 번호 : 353</span>
    <hr></hr>
    <div>포인트 사용</div>
    <span>포인트 : 0/1328 </span>
    <button>전액 사용</button>
    <hr></hr>
    <button>결제</button>
  </section>
  </>
  )
};

const Header = styled.div`
  background-color: black;
  color:white;
  padding: 10px;
  font-size: 20px;
`

export default Basket;