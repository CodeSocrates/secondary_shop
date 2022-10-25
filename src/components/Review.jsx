import styled from 'styled-components';

const Review = ({ writer, date, content}) => {
  <ReviewBGrnd>
    <WriterCharacter 
    src = "https://item.kakaocdn.net/do/a55eb47ef16882d3ee4ff9cd9bb87357ce9463e040a07a9462a54df43e1d73f1"
    alt = "작성자 캐릭터" />
    <Score>⭐⭐⭐⭐</Score>
    <WriterDate>
      {writer} | {date}
    </WriterDate>
    <Content>{content}</Content>
  </ReviewBGrnd>
}

const ReviewBGrnd = styled.div`
  background-color: #bcbcbc;
  padding: 16px 24px;
`;

const WriterCharacter = styled.img`
  width:40px;
  height:20px;
  padding: 10px 10px 15px 5px;
`;

const Score = styled.div`
  padding: 10px 0px 1px 0px;
`;

const WriterDate = styled.div`
  color:gray;
`;

const Content = styled.div`
  color:black;
`;

export default Review;