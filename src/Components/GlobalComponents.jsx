import styled from "@emotion/styled";
import React from "react";
import { ColumnWrapper, RowWrapper } from "./Wrapper";
import { Link } from "react-router-dom";

// 버튼앨리먼트
export const SigButton = styled.button`
  padding: 16px 0;
  background-color: var(--main);
  color: var(--pure-white);
  font-weight: var(--bold);
  text-align: center;
  min-width: 173px;
  border-radius: ${(props) => (props.circle ? "50px" : "16px 0")};
  cursor: pointer;
  &.ghost {
    color: var(--main);
    background-color: var(--pure-white);
    border: 2px solid var(--main);
  }
  &.disable {
    background-color: var(--line-gray);
    color: var(--pure-white);
  }
`;
export const SubText = styled.span`
  display: block;
  font-size: var(--sub-font-size);
`;

// 태그 앨리먼트
export const SigTag = styled.span`
  padding: 2px 4px;
  background-color: var(--main);
  color: var(--pure-white);
  font-weight: var(--sub);
  text-align: center;
  min-width: 33px;
  border-radius: 4px 0px;
  &.ghost {
    color: var(--main);
    background-color: var(--pure-white);
    border: 1px solid var(--main);
  }
  &.active {
    color: var(--pure-white);
    background-color: var(--main);
  }
  &.disabled {
    color: var(--line-gray);
    background-color: var(--pure-white);
    border: 1px solid var(--line-gray);
  }
`;

export const HongSiCardWrapper = styled.div`
  width: 100%;
  max-width: 628px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
`;
export const HongSiCard = ({ props }) => {
  const {
    title,
    startDate,
    endDate,
    currentParticipant,
    maxParticipant,
    image,
    tags,
    category,
    hongsi_id,
  } = props;
  return (
    
    <HongSiCardWrapper key={hongsi_id}>
      <Link to={`/hongsi/${hongsi_id}`} className="space-between width100" >
        <RowWrapper>
          <ImageElem circle={true} className="noneForMobile mr-16 " />
          <ColumnWrapper className="space-between">
            <div>
              <h2 className="h4 mb-4 medium">{title}</h2>
              <span>목표일자 : {endDate}</span>
              <ColumnWrapper className="mb-4">
                <span>
                  {currentParticipant}/{maxParticipant} 명 참여중
                </span>
                {/* <RowWrapper className="mt-8">
                  {tags.map((e) => {
                    return <SigTag className="ghost mr-4">{e.tag}</SigTag>;
                  })}
                </RowWrapper> */}
              </ColumnWrapper>
            </div>
            <span className="sub space-end">{startDate}</span>
          </ColumnWrapper>
        </RowWrapper>
        <ImageElem
          src={image}
          alt={`${title}게시물의 대표이미지`}
          width={174}
          height={174}
          className={"imageForMobole"}
        />
      </Link>
    </HongSiCardWrapper>
  );
};
// 이미지 랩퍼
export const ImageElem = styled.img`
  width: ${(props) =>
    (props.width ? props.width : "36") + props.unit ? props.unit : "px"};
  height: ${(props) =>
    (props.height ? props.height : "36") + props.unit ? props.unit : "px"};
  background-color: var(--bg-gray);
  border-radius: ${(props) => (props.circle ? "100%" : "16px 0")};
  display: block;
  object-fit: cover;
`;
// 좋아요 카운트

const ViewCounterWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;
export const IconElem = styled.img`
  width: ${(props) => (props.width ? props.width : "36")}px;
  height: ${(props) => (props.height ? props.height : "36")}px;
`;
const ViewCounterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ViewCounter = ({ view, like }) => {
  return (
    <ViewCounterWrapper>
      {view && (
        <ViewCounterColumn className="text-align-center mr-16">
          <SubText className="medium font-gray">조회수</SubText>
          <SubText className="font-gray">{view}</SubText>
        </ViewCounterColumn>
      )}
      {like && (
        <ViewCounterColumn className="text-align-center mr-16">
          <SubText className="medium font-gray">찜</SubText>
          <SubText className="font-gray">{like}</SubText>
        </ViewCounterColumn>
      )}
    </ViewCounterWrapper>
  );
};

// ㄴㄴ
const GlobalComponents = () => {};

export default GlobalComponents;
