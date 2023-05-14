개발 일지

[2023-05-14]

1. React Router Dom 설치

[ 설치 ]

`npm i react-router-dom`으로 설치

[ BrowserRouter vs createBrowserRouter ]

BrowserRouter는 라우터를 컴포넌트 스타일로 만든다.
반면 createBrowserRouter는 선언적 방식으로 만든다.
사실 기존의 BrowserRouter를 사용하는 방법은, 컴포넌트가 아님에도 컴포넌트 스타일로 만들었다.
그렇지만 createBrowserRouter를 도입하면서, 라우터를 선언식으로 좀 더 자연스럽게 만든다.

[ errorElement ]

경로를 찾지 못했을 경우 랜더링할 컴포넌트를 지정 가능.
또한 컴포넌트가 충돌할 경우에도 errorElement에서 지정한 컴포넌트를 보여준다.
프로젝트에서는 페이지가 없을 경우 NotFound를 보여주고, 컴포넌트 충돌시에는 Error가 보이게 만들었다.

[ useNavigate ]

v5에서 location 대신에 생긴 기능.
아래처럼 사용하면 /about 페이지로 이동 가능.
버튼을 누르거나 제출이 완료되었을 때, 페이지 이동 기능 구현에 사용.

```javascript
const navigate = useNavigate();
navigate("/about");
```

[ useParams ]

라우터에서 경로를 동적으로 설정하고 싶으면 :를 사용한다.
예를 들어서 "party/1" 같은 경로를 받고 싶으면, "party/:id" 같은 식으로 적는다.

그런데 여기서 id로 적힌 값을 각 컴포넌트에서 받아와야한다.
왜냐하면 그 id에 맞춰 서버에 다른 요청을 보내기 때문이다.
동적 라우트를 가져오고 싶으면 useParams를 사용한다.

```javascript
const params = useParams();
```

위 params에는 params.id에 1이 들어 있다.
ES6를 사용하면 좀 더 깔끔하게 id를 받아올 수 있다.

```javascript
const { id } = useParams();
```

[ useOutletContext ]

부모에서 자식으로 값을 전달할 때, props를 사용했다.
react-router-dom에서도 같은 일을 하는데, Outlet에 값을 전달하면 그 자식 컴포넌트에서 사용할 수 있다.
Outlet에 값을 전달하려면 context를 사용한다.

```javascript
<Outlet context={{ value: 1}}>
```

```javascript
const { value } = useOutletContext();
```

[ useSearchParams ]

url의 search params를 고칠 수 있다.

```javascript
const [readSearchParams, setSearchParams] = useSearchParams();
```

readSearchParams는 URLSearchParams 값이 들어 있는데, 자바스크립트에 기본적으로 있는 기능이다.
get, has, keys 등 다양한 기능이 있으므로 필요하면 검색.

setSearchParams는 search params를 변경하는데 사용한다.

```javascript
setSearchParams({
  day: "today",
  tomorrow: "123",
});
```

[ extras ]

loader: 페이지 로딩 시에 데이터 로딩을 해준다.

2. react-hook-form 설치

3. button vs input type="button"

- [참고링크](https://cocoder16.tistory.com/18)

4. Axios 설치(백 미완성으로 테스트 못함)
