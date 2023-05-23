import styled from "styled-components";
import happyDog from "../../assets/image/happyDog.png";
import userImage1 from "../../assets/image/userImage1.png";
import Comment from "../../components/Comment";
import CommentWriter from "../../components/CommentWriter";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 372px;
  object-fit: cover;
`;

const BoardBody = styled.div`
  padding: 64px 64px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  gap: 32px;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  color: #5c5f60;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
`;

const UserName = styled.span`
  font-size: 14px;
  color: #5c5f60;
`;

const Date = styled.span``;

const Content = styled.div`
  white-space: pre-line;
  margin-top: 32px;
  font-size: 16px;
  line-height: 32px;
`;

const Circle = styled.div`
  width: 720px;
  height: 720px;
  border-radius: 50%;
  position: absolute;
  left: -172px;
  top: 0px;
  background: #cde7ee;
  z-index: -1;
`;

const CommentTop = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 64px;
  margin-bottom: 32px;
  width: 100%;

  position: relative;
`;

const CommentNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Triangle = styled.div`
  position: absolute;
  width: 720px;
  height: 720px;
  right: -720px;
  top: -264px;
  z-index: -1;

  background: #cde7ee;
  transform: rotate(-120deg);
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function BoardDetail() {
  return (
    <BoardContainer>
      <Image src={happyDog} />
      <BoardBody>
        <Circle />
        <Title>자네는 어디 강씨인가?</Title>
        <Info>
          <Date>2023.05.17</Date>
          <User>
            <UserImage src={userImage1} />
            <UserName>사용자 이름</UserName>
          </User>
        </Info>
        <Content>
          {`현재 알파독 이론에 기반한 교육 방식에 대해서는 의견이 분분하다. 알파독
          이론의 역사가 훨씬 더 깊으며, 무엇보다 알파독 이론을 적극적으로 미는
          유명인까지 있는 마당에 한국에서는 알파독 이론파가 득세함은 당연할지도
          모른다. 알파독 방식은 강형욱의 방식보다 직관적이다. 훈련사 입장에서야
          일생을 개와의 소통에 쓰기 때문에 무엇이 문제인지 알 수 있지만 일반인
          입장에서 개의 문제행동의 원인을 파악하기 불가능한 경우가
          많다.서열훈련에서는 모르는 모든 상황에 대해 서열 한가지로 설명하는
          반면 카밍 시그널은 똑같은 문제상황도 상반된 원인을 가지고 있을 수
          있다고 본다 .이 원인을 정확히 판단해야 하고, 그렇지 않으면 상황이
          오히려 악화될 수도 있다. 강형욱은 이런 관찰을 함에 있어 매우 직관적인
          감각을 가졌으며, 또한 상당한 수준의 지식을 머리속에 넣어두고 또 직접
          체득한 사람이다. 그러나 대부분의 일반인은 그렇지 않다는 사실을 염두에
          둘 필요가 있다.[18]그러나 알파독 문서에서도 볼 수 있듯이 알파독 이론은
          세계적으로도 상당히 논란 중에 있으며, 긍정하는 전문가들도 일부 있으나,
          전반적으로는 부정되는 추세이다.카밍 시그널로 유명한 투리드 루가스의
          연구는 1990년대에 시작된, 훈련기술 중에서도 역사가 짧은 이론[19]이다.
          그리고 시저 밀란은 다치거나 다칠 뻔한 적은 있어도 교정 그 자체에 애를
          먹어본 적은 강형욱보다 없는 편이다. 강형욱의 방식은 시간이 오래
          걸린다는 단점도 있다.사족으로, 이 개 조련에 대한 논쟁은 순수하게
          학술적인 이유만으로 이 논쟁이 벌어지는 것이 아니다. 조련사들과
          학자들의 명성과 어떻게 보면 생계가 달린 문제이기도 하기
          때문이다.강형욱의 훈련방식은 보호자의 책임의식을 강조하다보니, 애견을
          맡겼다가 보호자가 혼나는 경우가 많다. 그리고 애견이 문제행동을 보이는
          이유는 보호자가 평소 애견을 다루는 방식이나 습관이 원인이라고 보기
          때문에 보호자를 교육하는데 중점을 둔다.양쪽의 단적인 차이는 언급하는
          단어에서도 드러난다. 기존 알파독식 서열 훈련 방식의 국내 유명인인
          이웅종은 '견주(개주인)', 강형욱은 '보호자'라고 표현한다.그러나 목적
          면에서는 동일하다고 볼 수 있다. 예컨대 개가 짖거나 사납게 대하는
          이유를 개가 그 상황을 통제하려는 데서 이유를 찾기도 하는데, 이
          통제권을 사람이 갖도록 유도하는 교육방식을 강조하기 때문이다.`}
        </Content>
        <CommentTop>
          <CommentNumber>32개의 댓글</CommentNumber>
          <Triangle />
        </CommentTop>
        <CommentWriter />
        <CommentList>
          {[1, 2, 3, 4, 5, 6].map((e, index) => {
            return <Comment />;
          })}
        </CommentList>
      </BoardBody>
    </BoardContainer>
  );
}
