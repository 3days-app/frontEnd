import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImageElem } from "../../Components/GlobalComponents";
//import communityIcon from "../../images/communityIcon.svg";
import styled from "@emotion/styled";
import {
  MainContentContainer,
  MainCenterWrapper,
  // RowWrapper,
  // ColumnWrapper,
} from "../../Components/Wrapper";
import Loading from "../Loading";
const Wrap = styled.div`
  /* flex-direction: row; */
  display: flex;
  flex-flow: row wrap;
  min-height: 50vh;
  /* width: 80%; */
`;
const BoardElemWarpper = styled.div`
  padding: 16px;
  margin:8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  transition-duration: 300ms;
  &:hover{
    box-shadow: 0px 4px 12px rgba(102, 31, 7, 0.3);
    color: var(--main);
  }
`;

const Board = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //console.log(id);
  useEffect(() => {
    axios.get(`/hong-si/board/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data)
      setIsLoading(false);
    });
  }, []);
  return !isLoading && data ? (
    <MainContentContainer>
      <MainCenterWrapper>
        <Wrap>
          {data.length!==0?data.map((e) => {
            return (
              <BoardElemWarpper key={e.bodar_id} className="shadow-box">
                <ImageElem
                  src={e.image}
                  alt={`${e.title}게시물의 대표이미지`}
                  width={174}
                  height={174}
                />
                <p className="mt-8 medium">{e.content}</p>
              </BoardElemWarpper>
            );
          }):<span>인증 사진이 없습니다</span>}
        </Wrap>
      </MainCenterWrapper>
    </MainContentContainer>
  ) : (
    <Loading/>
  );
};
export default Board;
