import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
//테스르로 만든 마이페이지입니다...
import Mypage from "./Pages/Mypage/Mypage";
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";
import Missing from "./Pages/Missing";
import Login from "./Pages/Login";
import AuthProvider from "./Components/Auth/AuthProvider";
import DefaultRouter from "./Router";
import Write from "./Pages/Write";
import HongsiDetail from "./Pages/Board/HongsiDetail";
import HongsiList from "./Pages/Board/HongsiList";
import Board from "./Pages/Board/Board";
import DevTools from "./Components/DevTools";
import MyHongsiList from "./Pages/Mypage/MyHongsiList";
import CardUI from "./Pages/CardUI";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar는 리랜더링 되지않고, URL에 따라 하위 컴포넌트만 리랜더링 되게하기 위한 구조입니다 */}
      {/* <DevTools /> */}
      <Navbar />
      {/* 양옆 Padding을 제공하는 Wrapper 입니다 */}

      <Routes>
        {/* 로그인해야만 접근가능한 URL */}
        {/* <Route element={<AuthProvider />}> */}
        <Route path="/profile" element={<DefaultRouter />}>
          {/* <Route path=":id" element={<Mypage />} /> */}
          <Route path=":id" element={<CardUI />} />
        </Route>
        {/* </Route> */}

        {/* 퍼블릭 오픈된 url */}
        <Route path="/" element={<Main />} />

        <Route path="/hongsi" element={<DefaultRouter />}>
          <Route index element={<HongsiList />} />
          <Route path=":id" element={<DefaultRouter />}>
            <Route index element={<HongsiDetail />} />
          </Route>
        </Route>
        <Route path="/hongsi-board" element={<DefaultRouter />}>
          <Route path=":id" element={<Board />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<Write />} />
        <Route path="/board" element={<Board />} />
        <Route path="/myhongsi" element={<MyHongsiList />} />
        {/* 잘못된 경로일때 보내는 곳*/}
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
