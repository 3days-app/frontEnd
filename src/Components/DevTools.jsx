import styled from "@emotion/styled";
import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../Recoil/atoms/atom";
import { SigButton } from "./GlobalComponents";

const DevBack = styled.section`
  background-color: #333;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const DevTools = () => {
  const [user, setUser] = useRecoilState(userState);
  const forceLogin = async (e) => {
    setUser({ userId: "jungu", nickname: "안녕나야" });
  };

  const forceLogout = async (e) => {
    e.preventDefault();
    axios.post("/logout", { id: 123, password: 123 }).then((res) => {
      console.log(res.status);
      setUser(null);
    });
  };
  return (
    <DevBack>
      <SigButton onClick={forceLogin} className={user ? "disable" : ""}>
        개발용 강제로그인
      </SigButton>
      <SigButton onClick={forceLogout} className={user ? "" : "disable"}>
        개발용 강제로그아웃
      </SigButton>
    </DevBack>
  );
};

export default DevTools;
