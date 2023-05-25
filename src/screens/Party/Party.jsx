import styled from "styled-components";
import PartyCard from "../../components/PartyCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Dummy1 from "../../image/dummy1.png";
import Dummy2 from "../../image/dummy2.png";
import Dummy3 from "../../image/dummy3.png";
import Dummy4 from "../../image/dummy4.png";

const PartyContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(255, 251, 245);
`;

const PartyHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 64px 0px;
`;

const Title = styled.div`
  font-size: 36px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #8e9192;
`;

const PartyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px 64px;
  box-sizing: border-box;
  gap: 32px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const WriteLink = styled(Link)`
  width: 48px;
  height: 48px;
  fill: #6c9bcf;
  position: absolute;
  top: -128px;
  right: 64px;
`;

const WriteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  /* margin-bottom: 64px;
  padding: 0px 64px; */
  box-sizing: border-box;
  position: relative;
`;

export default function Party() {
  const [party, setParty] = useState([]);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "http://localhost:8080/api/party",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          setParty(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("error occured");
    }
  }, []);

  return (
    <PartyContainer>
      <PartyHeader>
        <Title>파티</Title>
        <Subtitle>새로운 만남을 약속해보세요</Subtitle>
      </PartyHeader>
      <WriteContainer>
        <WriteLink to="/party/write">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="100%"
            height="100%"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </WriteLink>
      </WriteContainer>
      <PartyList>
        <PartyCard
          key={"first"}
          info={{
            party_id: 1,
            course_explain:
              "해미순교성지에서 시작되는 도보순례길로 해미읍성, 한티고개등 천주교 신자에 대한 박해와 아픔이 서려 있는 곳이다. 그 길을 따라 걷다보면 당시 고통속에 끌려가면서도 자신의 신앙을 끝까지 지키고자 했던 옛 순교자들의 숭고한 정신을 되새겨 볼 수 있으며, 마음속으로 참회하고 기도하며 걷기에 더없이 좋은 길이다.",
            course_name: "서산아라메길",
            course_location: "충남 서산시",
            course_level: "보통",
            course_time: "3시간 30분",
            course_km: "11",
            party_limit: "7",
            user_count: "3",
            party_depart_date: "2023-05-26 18:40:00",
            src: Dummy1,
          }}
        />
        <PartyCard
          key={"second"}
          info={{
            party_id: 2,
            course_explain:
              "357m의 남산을 중심으로 지천, 적누저수지, 광금.탄정리 벚꽃길을 따라 한바퀴를 도는 녹색 둘레길로 지역주민 건강증진을 위한 길이다. 구간별 테마를 구분해 4개 구간으로로 구분하고 있다. ①지천생태길(4.2㎞) : 지천의 사계절 봄나물,나비,참매,큰고니,원앙이등 철새들을 볼 수 있다. ②녹색길(4.9㎞) : 적누저수지를 따라 사색을 즐길수 있는 호젓한길 가끔 수달도 볼 수 있다. ③벚꽃길(1.8㎞) : 단국대 사과농장에서 장곡사까지 벚꽃이 장관이다. ④고향길(2.9㎞) : 시골의 고향길을 느낄수 있으며, 배움의 터전인 청양향교를 찾아갈 수 있다.",
            course_name: "소양강둘레길",
            course_location: "강원 인제군",
            course_level: "보통",
            course_time: "3시간",
            course_km: "9",
            party_limit: "4",
            user_count: "2",
            party_depart_date: "2023-05-16 18:40:00",
            src: Dummy2,
          }}
        />
        <PartyCard
          key={"third"}
          info={{
            party_id: 4,
            course_explain:
              "서천읍 남산리와 마서면 봉남리에 걸쳐있는 산으로 이산의 정상부에 둘레 약468m에 이르는 성곽을 두른 것이 서천 남산성이다. 예전부터 마을사람들이 사용하던 산길을 정비하여 남산길을 만들었으며 서천군의 중심지를 한눈에 볼 수 있는 특징이 있다. 또한 읍내 중심에서 출발해 편리하고 그 주변 곳곳을 살펴볼 수 있도록 코스가 넓게 짜여있어 트래킹과 산행이 동시에 가능한 코스이다.",
            course_name: "서천 남산길",
            course_location: "충남 서천군",
            course_level: "보통",
            course_time: "3시간 30분",
            course_km: "13",
            party_limit: "2",
            user_count: "1",
            party_depart_date: "2023-05-31 18:40:00",
            src: Dummy3,
          }}
        />
        <PartyCard
          key={"fourth"}
          info={{
            party_id: 7,
            course_explain:
              "충청남도 천안시 유량동에서 안서동으로 이어지는 솔바람길은 완만한 산세로 여성 산행인들이 즐겨 찾는 곳이다. 솔바람길은 주변으로 천안의 역사와 문화를 간직한 곳이다 2시간 이내의 짧은 산행이어서 산책이나 가족 산행으로 알맞다. 천안 시민은 주로 원성동 천안시민체육공원(청송사)에서 구름다리를 거쳐 유량동을 지나 성불사 뒤 능선을 따라 각원사와 유왕골 갈림길에서 각원사쪽으로 내려오는 5.3㎞ 길이의 코스를 이용한다. 솔바람길의 백미는 구름다리위에서 맞는 산바람이다. 산행으로 인한 땀방울이 다리위 산바람으로 인해 시원해지는 느낌은 태조산에서만 맛볼 수 있는 또 하나의 자랑거리이다. 산행은 각원사 주차장에서 각원사쪽으로 바라볼 때 청동대불을 거쳐 좌측능선에 올라선 후 절을 한 바퀴 감싸돌며 능선을 타고 주차장 아래 도로변에 도착하게 되는데 2시간도 채 못걸린다. 굴곡없이 평평하고 한적한 능선길이 부담 없어 비가올 때나 달리 갈 데가 없을 때 찾아볼 만한 친근한 곳이다.",
            course_name: "태조산 솔바람길",
            course_location: "충남 천안시 동남구",
            course_level: "보통",
            course_time: "2시간",
            course_km: "5.2",
            party_limit: "10",
            user_count: "4",
            party_depart_date: "2023-05-21 18:40:00",
            src: Dummy4,
          }}
        />
        {party &&
          party.map((info, i) => {
            return <PartyCard key={i} info={info} />;
          })}
      </PartyList>
    </PartyContainer>
  );
}
