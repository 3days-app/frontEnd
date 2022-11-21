import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IconElem, ImageElem } from "../../Components/GlobalComponents";
import galleryIcon from "../../images/galleryIcon.svg";
import shareIcon from "../../images/shareIcon.svg";
import { useNavigate } from "react-router-dom";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  RowWrapper,
} from "../../Components/Wrapper";
import { copyUrlOfWebSite } from "../../Hooks/controller";
import Loading from "../Loading";
import { SigButton } from "./../../Components/GlobalComponents";
import { useRecoilState } from "recoil";

import { userState } from "./../../Recoil/atoms/atom";

const HongsiDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useRecoilState(userState);
  // 게시글삭제
  const handleRemove = () => {
    if (window.confirm("게시글을 삭제하겠습니까?")) {
      axios.delete(`/hong-si/${data.hongsi_id}`).then((res) => {
        console.log(data.hongsi_id);
        console.log(res.data);
      });
    }
  };
  // 참여
  function handlePartici(e) {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post(`/hong-si/join/${id}`, {
      user_id: user.user_id,
    })
    // .then(()=>{
      navigate(`/hongsi-board/${id}`);
    // });
  }

  useEffect(() => {
    axios.get(`/hong-si/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

    axios
    .post(`/hong-si/join/${id}`)
  
  console.log(data);
  return !isLoading && data ? (
    <MainContentContainer>
      <MainCenterWrapper>
        <div className="space-between width100 align-center">
          <h2 className="h4 mb-4 medium">{data.title}</h2>
          <RowWrapper>
            <Link to={`/hongsi-board/${id}`}>
              <ColumnWrapper className="align-center mr-16 mb-4">
                <IconElem src={galleryIcon} width="24"></IconElem>
                <span className="font-gray sub">게시판</span>
              </ColumnWrapper>
            </Link>
            <ColumnWrapper
              className="align-center mb-4"
              onClick={copyUrlOfWebSite}
            >
              <IconElem src={shareIcon} width="24"></IconElem>
              <span className="font-gray sub cursor ">공유</span>
            </ColumnWrapper>
          </RowWrapper>
        </div>

        <ImageElem className="mb-8" height={400} src={data.image} alt={`${data.title}의 대표이미지`} />
        <div className="space-between width100">
          <span className="font-gray">목표일자 : {data.endDate}</span>
          <span className="font-gray">
            <span className="font-main">{data.currentParticipant}</span>/
            {data.maxParticipant} 명 참여중
          </span>
        </div>
        {/* <RowWrapper className="mt-8">
          {data.tags.map((e) => {
            return <SigTag className="ghost mr-4" key={e.hongsi_id}>#{e.tag}</SigTag>;
          })}
        </RowWrapper> */}

        <p className="mt-16">{data.content}</p>
        {data.writer === user?.nickname ? (
          <p className="mt-16 cursor" onClick={handleRemove}>
            삭제
          </p>
        ) : null}
        {data.writer === user?.nickname ? <p className="mt-16">수정</p> : null}
        <SigButton className="mt-16" onClick={handlePartici}>참여하기</SigButton>
      </MainCenterWrapper>
    </MainContentContainer>
  ) : (
    <Loading />
  );
};

export default HongsiDetail;
