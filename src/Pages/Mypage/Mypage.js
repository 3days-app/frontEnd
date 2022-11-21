import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ImageElem, SigButton } from "../../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  RowWrapper,
  MainLeftWrapper,
} from "../../Components/Wrapper";
import ggachi from "../../images/ggachi_front.png";
import { userState } from "../../Recoil/atoms/atom";
import Loading from "../Loading";

const CheckListButton = styled.div`
  width: 100%;
  padding: 16px;
  background-color: var(--main);
  text-align: center;
  color: var(--pure-white);
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--pure-white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border: 2px solid var(--bg-gray);
  border-radius: 10px;
  overflow: hidden;
`;
const CounterWrapper = styled.div`
  max-width: 360px;
`;
const CardContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--line-light-gray);
  border-radius: 20px;
`;

// ===================================컴포넌트 시작 ===========================//
const Mypage = () => {
  const { nickname } = useRecoilValue(userState);
  const [owning, setOwning] = useState();
  const [joining, setJoining] = useState();
  const [completed, setCompleted] = useState();

  useEffect(() => {
    axios
      .get("/mypage/hong-si/owner")
      .then((res) => {
        setOwning(res.data);
      })
      .then(() => {
        axios.get("/mypage/hong-si/participant").then((res) => {
          setJoining(res.data);
        });
      })
      .then(() => {
        axios.get("/mypage/hong-si/completed").then((res) => {
          setCompleted(res.data);
        });
      });
  }, []);

  return owning && joining && completed ? (
    <MainContentContainer>
      {/* 프사공간 */}
      <MainLeftWrapper>
        <ColumnWrapper>
          <ImageElem src={ggachi} width={70} height={70} circle={true} />
          <h2 className="bold mt-8">
            {nickname}
            <span> 님</span>
          </h2>
          <ul className="mt-8">
            <li className="sub mt-8">세팅/수정</li>
            <li className="sub mt-8">탈퇴</li>
          </ul>
        </ColumnWrapper>
      </MainLeftWrapper>

      <MainCenterWrapper>
        <p className="mt-8 bold">나의 홍시</p>
        <Container className="mt-16 mb-16">
          {/* 숫자카운터 (내가 만든, 내가 픽한, 내가 완료한) */}
          <CounterWrapper className="mb-16 space-between width100 pl-16 pr-16">
            {owning.map((e, i) => {
              return (
                <ColumnWrapper
                  key={e.hongsi_id}
                  className="center align-center mt-16 mb-16"
                >
                  <span className="mt-8 bold">{e.title}</span>
                  <p className="mt-8">{owning.length}</p>
                </ColumnWrapper>
              );
            })}
          </CounterWrapper>
          {/* 버튼 */}
          <CheckListButton>
            <Link to={"/"}>목록 확인하기</Link>
          </CheckListButton>
        </Container>
        {/* 카드 */}
        <p className="mt-16 bold">달성카드</p>
        {/* 카드맵 */}
        <RowWrapper>
          {owning.map((e, i) => {
            return (
              <CardContainer
                key={`오운완 ${e.hongsi_id}`}
                className={"mt-16 mr-8"}
              >
                {e.content}
              </CardContainer>
            );
          })}
        </RowWrapper>
      </MainCenterWrapper>
    </MainContentContainer>
  ) : (
    <Loading />
  );
};
export default Mypage;
