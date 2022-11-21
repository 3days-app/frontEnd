import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../Recoil/atoms/atom";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;

const Input = styled.input`
  width: 260px;
  height: 35px;
  padding: 8px;
  margin: 8px 0;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-top: 8px;
`;

const Button = styled.button`
  width: 260px;
  height: 35px;
  color: var(--alert-amber);
  background-color: var(--main);
  border: 0;
  border-radius: 3px;
  padding: 0;
  margin-bottom: 5px;
  display: block;
`;
const Signup = () => {
  const navigate = useNavigate();
  const navigateTologin = () => {
    navigate("/login");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [nickname, setNickname] = useState("");
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onChangePasswordchk = (e) => {
    setPasswordError(e.target.value !== password);
    setConfirm(e.target.value);
  };
  const onNicknameHandler = (e) => {
    setNickname(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        email: email,
        password: password,
        nickname: nickname,
      })
      .then(() => {
        navigate("/login");
      });
  };
  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    // 형식에 맞는 경우 true 리턴
  };
  return (
    <MainContainer>
      <Container>
        <Form onSubmit={onSubmit}>
          <InputContainer>
            <Label htmlFor={"Email"}>이메일</Label>
            <Input
              id="email"
              name="email"
              placeholder="이메일 주소를 입력하세요"
              type="text"
              onChange={onEmailHandler}
            />
            <Label htmlFor={"password"}>비밀번호</Label>
            <Input
              id="password"
              name="password"
              placeholder="숫자, 영문 조합 최소 8자"
              type="password"
              onChange={onPasswordHandler}
              onBlur={checkPassword}
            />
            <Input
              id="confirmpass"
              name="confirmpass"
              placeholder="비밀번호 재입력"
              type="password"
              onChange={onChangePasswordchk}
            />
            {passwordError && (
              <div style={{ color: "var(--alert-red)" }}>
                비밀번호가 일치하지 않습니다.
              </div>
            )}

            <Label htmlFor={"nickname"}>닉네임</Label>
            <Input
              id="nickname"
              name="nickname"
              placeholder="닉네임을 설정해주세요"
              type="text"
              onChange={onNicknameHandler}
            />
          </InputContainer>
          <Button type="submit" style={{ color: "white" }}>
            SignUp
          </Button>
        </Form>
      </Container>
    </MainContainer>
  );
};
export default Signup;
