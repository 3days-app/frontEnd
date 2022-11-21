import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HongSiCard, SigButton } from '../../Components/GlobalComponents';
import { ColumnCenterWrapper, ColumnWrapper, MainCenterWrapper, MainContentContainer, MainRightWrapper } from '../../Components/Wrapper';
import Loading from '../Loading';

const HongsiList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    axios.get(`/hong-si`).then((res) => {
      setData(res.data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  return !isLoading && data ? (
    <MainContentContainer>
      <MainCenterWrapper>
      <ColumnCenterWrapper as={"section"} className={"mt-36 justify-center-mobile"}>
          {data.map((e,i) => {
            return <HongSiCard props={e} key={e.hongsi_id}/>;
          })}
        </ColumnCenterWrapper>
      </MainCenterWrapper>
      <MainRightWrapper>
      <ColumnWrapper>
          <span className="h4 bold mt-16">함께하기</span>
          <span className="mt-4 mb-16">
            마음속에 담아만 두던 여러분의 목표를 이뤄보세요. 함께하면 성공가능성이 높아져요
          </span>
        </ColumnWrapper>
        <Link to={"/write"}>
          <SigButton> 새 목표 작성하기</SigButton>
        </Link>
      </MainRightWrapper>
    </MainContentContainer>
  ):<Loading></Loading>
}

export default HongsiList