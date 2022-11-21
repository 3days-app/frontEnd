import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { IconElem } from "../Components/GlobalComponents";
import {
  ColumnCenterWrapper,
  ColumnWrapper,
  MainContentContainer,
  RowWrapper,
} from "../Components/Wrapper";
import * as htmlToImage from "html-to-image";
import { copyUrlOfWebSite, randomNumber } from "../Hooks/controller";
import achive1 from "../images/achive(1).png";
import achive2 from "../images/achive(2).png";
import achive3 from "../images/achive(3).png";
import achive4 from "../images/achive(4).png";
import leaves from "../images/leavesBack.png";
import galleryIcon from "../images/galleryIcon.svg";
import shareIcon from "../images/shareIcon.svg";

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CardWrapper = styled.main`
  padding: 36px;
  width: 340px;
  height: 70vh;
  background-color: var(--pure-white);
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GgasikWrapper = styled.div`
  padding: 30px;
  max-width: 200px;
  background-position: center;
  background-size: contain;
  background-image: url(${leaves});
  background-repeat: no-repeat;
`;

const DownLoadWrap = styled.div`
  position: fixed;
  bottom: 18vh;
`;

const CardUI = () => {
  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  };

  randomNumber(0, 3);
  const [randomNum, setRandomNum] = useState(randomNumber(0, 4));
  const typeOfPhoto = [achive1, achive2, achive3, achive4];
  const typeOfContent = [
    "스터디 목표를 달성하셨네요!오늘의 공부를 내일로 미루지 말자! 원하는 시험 합격에도 도전해보세요~",
    "운동 목표를 달성하셨네요! 꾸준한 운동으로 올해는 건강하고 아름다운 몸을 유지해보세요~",
    "미라클 모닝 목표를 달성하셨네요! 당신의 세상을 바꾸는 작은 습관! 앞으로도 계속 실천해보세요~",
    "패션 목표를 달성하셨네요! 오늘 당신의 OOTD를 소개해주세요! 목표를 달성한 당신은 진정한 패션리더~..~",
  ];
  return (
    <MainContentContainer>
      <CardWrapper id="domEl" ref={domEl} className="shadow-box ">
        <h1 className="h4">
          <span className="bold h4">무지</span> 님
        </h1>
        <GgasikWrapper className="mb-16">
          <img className="width100" src={typeOfPhoto[randomNum]} alt="까치이미지" />
        </GgasikWrapper>
        <span className="mt-16">{typeOfContent[randomNum]}</span>
        <span className="sub mt-16 mb-16">2022-11-17 ~ 2022-11-20</span>
      </CardWrapper>
      <DownLoadWrap>
        <RowWrapper className="mt-16">
          <ColumnWrapper onClick={downloadImage} className="align-center mr-16 mb-4 cursor">
            <IconElem src={galleryIcon} width="24"></IconElem>
            <span className="font-gray sub">사진으로 저장</span>
          </ColumnWrapper>

          <ColumnWrapper
            className="align-center mb- cursor"
            onClick={copyUrlOfWebSite}
          >
            <IconElem src={shareIcon} width="24"></IconElem>
            <span className="font-gray sub ">링크복사</span>
          </ColumnWrapper>
        </RowWrapper>
      </DownLoadWrap>
    </MainContentContainer>
  );
};

export default CardUI;
