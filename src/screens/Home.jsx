import styled from "styled-components";
import HeroImage from "../image/Hero.png";
import Running from "../image/Running.png";
import Join from "../image/Join.png";
import { Link, useNavigate } from "react-router-dom";
import Service from "../image/Service.jpg";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 251, 245);
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${HeroImage}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 16px;
  width: 600px;
  padding: 20px 32px;
  opacity: 0.7;

  /* flex: 1; */
  /* width: 100%; */
  &:focus {
    outline: 1px solid #29bbd4;
  }
  background: rgb(255, 251, 245);
`;

const PageDescription = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 251, 245);
  display: flex;
  flex-direction: row;
`;

const PageDescriptionLeft = styled.div`
  width: 44%;
  height: 100vh;
  padding: 64px 0px;
  padding-left: 48px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageDescriptionRight = styled.div`
  width: 56%;
  height: 100vh;
  padding: 64px;
  padding-right: 64px;
  box-sizing: border-box;
`;

const DescriptionImage = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Description = styled.div`
  font-size: 24px;
  width: 100%;
  height: 100%;
  overflow-wrap: break-word;
  font-family: "KimjungchulGothic-Bold";
  font-weight: 400;

  display: flex;
  flex-direction: column;
  line-height: 40px;
`;

const ServiceContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  background-color: rgb(255, 251, 245);
`;

const ServiceLeft = styled.div`
  flex: 2;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: 0px 64px;
  box-sizing: border-box;
`;

const ServiceRight = styled.div`
  flex: 1;
  height: 100%;
  /* margin: 80px 0px; */
`;

const ExplainBox = styled.div`
  height: 596px;
  background-color: #eceeef;
  width: 400px;

  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: 1px dashed #009fb6;
  border-radius: 16px;
  overflow: hidden;
`;

const Box = styled.div`
  /* padding: auto; */
  padding: 56px 32px;
  /* display: inline-block; */
  /* box-sizing: border-box; */
  overflow-wrap: break-word;
  background-color: #ffffff;
  /* min-height: 50%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 32px;
`;

const ExplainImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Service}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupButton = styled.button`
  padding: 8px 48px;
  /* background: transparent; */
  border-radius: 32px;
  border: none;
  color: #009fb6;
  font-size: 16px;
  font-weight: bold;
  margin-top: 32px;
  background-color: #ffffff;
  border: 1px solid #009fb6;
  cursor: pointer;
  font-family: "omyu_pretty";
`;

const SuperBold = styled.span`
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
`;

const Bold = styled.span`
  font-weight: bold;
  font-size: 32px;
  /* line-height: 72px; */
  margin: 32px 0;
  font-family: "omyu_pretty";
`;

const Normal = styled.span`
  font-weight: 400;
  font-size: 23px;
  font-family: "omyu_pretty";
`;

const Light = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #6c6c6c;
`;

const SuperLight = styled.span`
  font-weight: 300;
  font-size: 20px;
`;

const ServiceBold = styled.span`
  font-weight: bold;
  font-size: 28px;
  /* line-height: 72px; */
  /* margin: 32px 0; */
  /* line-height: 44px; */
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MarginBottom = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const LinkStyled = styled(Link)`
  color: #dfdfdf;
  font-size: 24px;
  outline: 1px solid white;
  padding: 16px 64px;
  border-radius: 32px;
`;

const TextStyled = styled.div`
  font-size: 24px;
  color: #dfcfcf;
`;

const ToSignUp = styled(Link)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  /* text-decoration: underline; */
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const TextSignUp = styled.div`
  display: flex;
  gap: 16px;
`;

const Home = () => {
  const navigate = useNavigate();
  const toSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <Hero>
        {localStorage.getItem("access_token") ? (
          <LinkStyled to="/youtube">검색하기</LinkStyled>
        ) : (
          <LoginContainer>
            <TextStyled>두발네발에 방문하신 것을 환영합니다</TextStyled>
            <TextSignUp>
              <TextStyled>아직 회원이 아니신가요?</TextStyled>
              <ToSignUp to="signup">회원가입하러 가기</ToSignUp>
            </TextSignUp>
          </LoginContainer>
        )}
      </Hero>
      <PageDescription>
        <PageDescriptionLeft>
          <DescriptionImage src={Running} />
        </PageDescriptionLeft>
        <PageDescriptionRight>
          <Description>
            <SuperBold>STAY POSITIVE,</SuperBold>
            <SuperBold>LOOK HEALTHY</SuperBold>
            <SuperLight>
              Wellness Lifestyle brand by wellness experience with my mate
            </SuperLight>
            {/* <SuperLight></SuperLight> */}
            <Bold>사랑하는 반려동물과 함께 걸어가는 Dubal Nebal</Bold>
            <Normal>
              매일 매일 같은 산책길을 나서는 반려 동물과 나에게 새로운 경험을
              선사하는 날{" "}
            </Normal>
            <Normal>
              산책길을 나서는 반려 동물과 나에게 새로운 경험을 선사하는 날
            </Normal>
            <Normal>
              두발네발은 고객의 삶을 긍정으로 이끌어주는 "라이프 스타일"
              웹사이트 입니다.
            </Normal>
            <Normal>우리의 미션은 고객에게 지속적인 운동 루틴 형성,</Normal>
            <Normal>그리고 삶을 긍정으로 이끄는 '경험'을 전달하여</Normal>
            <Normal>
              사랑하는 반려동물과 함께 지속가능하면서도 건강한 라이프 스타일을
              돕는 것입니다.
            </Normal>
            <Normal>
              빠르고 간단한 회원 가입을 통해 다양한 저희의 서비스를 이용해
              주세요
            </Normal>
          </Description>
        </PageDescriptionRight>
      </PageDescription>
      <ServiceContainer>
        <ServiceLeft>
          <ExplainBox>
            <Box>
              <MarginBottom>
                <ServiceBold>나랑 같이 산책 갈래?</ServiceBold>
              </MarginBottom>
              <Light>반려동물에게 친구를 만들어주는 나들이</Light>
              <Light>두발네발의 다양한 산책 코스를 선택하여</Light>
              <Light>혼자 가기 어려웠거나,</Light>
              <Light>새로운 만남을 가지고 싶은</Light>
              <Light>고객분들을 위하여 Party 를 모집할 수 있는</Light>
              <Light>서비스를 제공합니다.</Light>
              <Light>게시판의 코스 업데이트 요청글의 추천 수를</Light>
              <Light>바탕으로 꾸준한 코스 업데이트가</Light>
              <Light>이뤄질 예정입니다.</Light>
              <Light>자유롭게 파티를 모집하고,</Light>
              <Light>다른 사람들의 파티에 참여하세요!</Light>
            </Box>
          </ExplainBox>
          <ExplainBox>
            <Box>
              <MarginBottom>
                <ServiceBold>모두와 이야기를 나누고</ServiceBold>
                <ServiceBold>다양한 Tip을 얻어가세요</ServiceBold>
              </MarginBottom>
              <Light>나의 인생 산책 장소 자랑부터,</Light>
              <Light>심심한 모든 순간까지</Light>
              <Light>카테고리를 설정하여 </Light>
              <Light>심심함을 덜어줄 소통부터</Light>
              <Light>본인만의 산책 장소 및 파티에서의</Light>
              <Light>행복한 경험 나누기까지</Light>
              <Light>모두와 친밀함을 쌓고 기억을 저장할 수 있는</Light>
              <Light>두발 네발의 게시판 서비스를 제공합니다.</Light>
              <Light>감성있는 사진과 함께 사람들에게</Light>
              <Light>경험을 나눠주세요!</Light>
            </Box>
          </ExplainBox>
        </ServiceLeft>
        <ServiceRight>
          <ExplainImage>
            <SignupButton onClick={toSignUp}>회원가입</SignupButton>
          </ExplainImage>
        </ServiceRight>
      </ServiceContainer>
      <Footer />
    </Container>
  );
};

export default Home;
