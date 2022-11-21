import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../Recoil/atoms/atom";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  background-color: #f1f2f3;
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

const Errormsg = styled.p`
  color: var(--alert-red);
  margin: 3px;
  font-size: 13px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 260px;
  height: 35px;
  padding: 0 8px;
  &:focus {
    filter: drop-shadow(0px 0px 2px var(--main));
    color: var(--font-main);
    background-color: #f4e9de;
  }
`;

const SubmitBtn = styled.input`
  width: 260px;
  height: 35px;
  font-size: 13.6px;
  font-weight: 600;
  color: var(--pure-white);
  background-color: var(--main);
  border: 0;
  border-radius: 3px;
  padding: 0;
  margin-bottom: 5px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
`;

function Login() {
  const [error, setErrMsg] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onLogin = async (data) => {
    // try {
    //   axios
    //     .post("/user/login", {
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       email: data.email,
    //       password: data.password,
    //     })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         console.log(res)
    //         setUser(res.data.data);
    //       }
    //     }).then(()=>{
    //       navigate(from, { replace: true });
    //     });
    // } catch (err) {
    //   console.log(err);
    //   if (!err?.response) {
    //     setErrMsg("서버로부터 응답이 없습니다");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("이메일 또는 패스워드를 확인해주세요");
    //     console.log(error);
    //   } else if (err.response?.status === 401) {
    //     setErrMsg("허가되지않은 접근입니다");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    // }
    fetch("http://3.39.24.209:80/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser({ data });
      })
      .then(() => {
        navigate(from, { replace: true });
      });
  };

  return (
    <MainContainer>
      <Container>
        <Form onSubmit={handleSubmit(onLogin)}>
          <InputContainer>
            <Label htmlFor={"Email"}>Email</Label>
            <Input
              type={"email"}
              id="Email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
                maxLength: 50,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <Errormsg> 이메일을 입력해주세요.</Errormsg>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Errormsg> 이메일 형식이여야 합니다.</Errormsg>
            )}
            {errors.email && errors.email.type === "maxLength" && (
              <Errormsg> 최대 길이는 50자 이하여야 합니다</Errormsg>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor={"password"}>Password</Label>
            <Input
              type={"password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <Errormsg> 패스워드를 입력해주세요</Errormsg>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <Errormsg> 최소 길이는 8자 이상이여야 합니다</Errormsg>
            )}
          </InputContainer>

          <SubmitBtn
            className="cursor"
            type="submit"
            value={"Login"}
          ></SubmitBtn>
          <Link className="mt-16 mb-16" to={"/signup"}>
            <span className=" font-gray">
              <span className="font-main bold">회원가입 </span>하고 목표이루자!
            </span>
          </Link>
          {error && <Errormsg> {error}</Errormsg>}
        </Form>
      </Container>
    </MainContainer>
  );
}

export default Login;
