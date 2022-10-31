import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {mockTheme1Products, mockTheme2Products} from "../data/mockData"

import Navigation from '../components/Navigation';
import ThemeButton from '../components/ThemeButton';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import {mockTheme1Products, mockTheme2Products} from "../data/mockData"
import { useEffect, useState } from 'react';

const Home = () => {
  // 목데이터의 1번테마를 불러올건지 2번테마를 불러올건지 결정하는 state
  // state to choose reading which theme from mockData
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  // 특정 테마버튼이 클릭되면 어떤 테마의 목데이터의 값을 불러올 지 스테이트를 설정해주는 함수
  // function to set state if themeButton is clicked
  const onClickThemeButton = (themeId) => {
    if (themeId === "mug") {
      setProducts(mockTheme1Products);
    } else if (themeId === "summer") {
      setProducts(mockTheme2Products);
    }
  };

  return (
  //홈페이지 ( MainPage )
  <HomeStyled>

    {/* 따순 머그컵 테마버튼 클릭 시 머그 값을 함수로 보냄
        Send property to onClickThemeButton if theme button is clicked */}
    <div>
      <Navigation />
      <ThemeSection>
        <ThemeButton 
          themeName={"#따순 머그컵"} 
          onClick={() => onClickThemeButton("mug")}
        />
        <ThemeButton 
          themeName={"#여름 더워요"} 
          onClick={() => onClickThemeButton("summer")}
        />
      </ThemeSection>
      <GrayLine />
    </div>

    <div>
      {/* Product Card 
          mockData list를 화면에 노출시키는 구문
          JS의 map() 문법
          목데이타의 값을 map() 문법을 통해 추출하여 ProductCard 컴포넌트로 전달
          extract mockData by using map() and send it to ProductCard component
          스테이트에 아무 값도 할당되지 않을 경우 div 출력
          if state is undefined, print div tag.
          */}

      {products ? (
        products.map((product) => (
          <ProductCard 
            onClick={() => navigate(`product/${product.id}`)}
            key={product.id}
            name={product.name}
            description={product.description}
            thumbnail={product.thumbnail}
          />
      ))
    ) : (
      <div>테마를 선택해주세요</div>
    )}

    </div>

  </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeSection = styled.div`
  display:flex;
  gap:12px;
  padding: 43px 24px 40px;
`;

const GrayLine = styled.div`
  height: 8px;
  background: #EEEEEE;
  bottom: 3px;
`;

export default Home;