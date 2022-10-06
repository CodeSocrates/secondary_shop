import styled from 'styled-components';

const ProductDetail = () => {
  return (
    <>
    <Header>
      <span style={{fontSize:30, fontWeight:700}}>유민몰</span>
      <span>            정유민 님</span>
      <span>           포인트 : 130000</span>
      <a href="http://localhost:3000/secondary_shop">🏠</a>
    </Header>
    <section>
      <span>최근 구매 상품</span>
      <hr></hr>
      <span>0</span>
      <hr></hr>
      <span>최근 구매 내역</span>
      <hr></hr>
      <span>0</span>
      <hr></hr>
      <span>장바구니</span>
      <hr></hr>
      <span>0</span>
      <hr></hr>
      <span>찜목록</span>
      <hr></hr>
      <span>0</span>
      <hr></hr>
    </section>
  </>
  )
};

const Header = styled.div`
  background-color: black;
  color:white;
  padding: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`

export default ProductDetail;