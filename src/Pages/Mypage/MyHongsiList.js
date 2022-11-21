import styled from "@emotion/styled";
import axios from "axios";
import { useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
import {
  ImageElem,
  SigButton,
  HongSiCardWrapper,
} from "../../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  MainRightWrapper,
  RowWrapper,
  MainLeftWrapper,
} from "../../Components/Wrapper";
import ggachi from "../../images/ggachi_front.png";
import { useParams } from "react-router-dom";
import { userState } from "../../Recoil/atoms/atom";


const Subtitle = styled.h2`
  font-size: 20px;
  margin: 15px;
`;

const BoardElemWarpper = styled.div`
  padding: 16px;
  margin: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  transition-duration: 300ms;
  &:hover {
    box-shadow: 0px 4px 12px rgba(102, 31, 7, 0.3);
    color: var(--main);
  }
`;



const CWrapper = styled.div`
  padding: 8px 0;
  width: 90vw;
  max-width: 680px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;
const MyHongsiList = () => {
  const { nickname } = useRecoilValue(userState);
  const [own, setOwn] = useState([
    {
      title: "",
      img: "",
    },
  ]);
  const [join, setJoin] = useState([
    {
      title: "",
      img: "",
    },
  ]);
  const [complete, setComplete] = useState([
    {
      title: "",
      img: "",
    },
  ]);

  useEffect(() => {
    axios.get(`hong-si/owning`).then((res) => {
      console.log("data", res.data);
      setOwn(res.data);
    });
  });
  useEffect(() => {
    axios.get(`hong-si/joining`).then((res) => {
      console.log("data", res.data);
      setJoin(res.data);
    });
  });
  useEffect(() => {
    axios.get(`hong-si/completed`).then((res) => {
      console.log("data", res.data);
      setComplete(res.data);
    });
  });

  return (
    <MainContentContainer>
      <MainLeftWrapper>
        <ColumnWrapper>
          <ImageElem src={ggachi} width={70} height={70} circle={true} />
          <h2 className="bold mt-8">
            {nickname}
            <span> 님</span>
          </h2>
        </ColumnWrapper>
      </MainLeftWrapper>
      <MainCenterWrapper>
        <ColumnWrapper>
          <div>
            <Subtitle>내가 만든 홍시</Subtitle>
            <RowWrapper>
              <CWrapper>
                {own.map((e) => {
                  return (
                    <BoardElemWarpper>
                      <ImageElem src={e.img} style={{ margin: "10px" }} />
                      <p>{e.title}</p>
                    </BoardElemWarpper>
                  );
                })}
              </CWrapper>
            </RowWrapper>
          </div>
          <div>
            <Subtitle>내가 픽한 홍시</Subtitle>
            <RowWrapper>
              <CWrapper>
                {join.map((e) => {
                  return (
                    <BoardElemWarpper>
                      <ImageElem src={e.img} />
                      <p>{e.title}</p>
                    </BoardElemWarpper>
                  );
                })}
              </CWrapper>
            </RowWrapper>
          </div>
          <div>
            <Subtitle>내가 만든 홍시</Subtitle>
            <RowWrapper>
              <CWrapper>
                {complete.map((e) => {
                  return (
                    <BoardElemWarpper>
                      <ImageElem src={e.img} />
                      <p>{e.title}</p>
                    </BoardElemWarpper>
                  );
                })}
              </CWrapper>
            </RowWrapper>
          </div>
        </ColumnWrapper>
      </MainCenterWrapper>
    </MainContentContainer>
  );
};
export default MyHongsiList;
