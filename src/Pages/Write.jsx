import styled from "@emotion/styled";
import "../index.css";
import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SigButton } from "../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  RowWrapper,
} from "../Components/Wrapper";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const Wrap = styled.div`
  /* flex-direction: row; */
  display: flex;
  flex-flow: row wrap;
  /* width: 80%; */
`;
const Box1 = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Input = styled.input`
  width: 100%;
  height: 20vw;
  display: fixed;

  font-weight: 300;
  font-size: 1.1rem;
  text-align: center;
  resize: none;
  padding: 1vw;
  letter-spacing: 0.1vw; //글자 간격
  line-height: 2vw; // 줄 간격
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-top: 8px;
`;
const CATEGORY_LIST = [
  { id: 0, data: "운동" },
  { id: 1, data: "패션" },
  { id: 2, data: "스터디" },
  { id: 3, data: "일상" },
];

const Checkbox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0;
  margin-right: 1vw;
  &:checked {
    border-color: transparent;
    background-color: limegreen;
  }
`;
const AlbumCheck = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5%;
`;
const Write = () => {
  //체크박스 하나인지 확인
  const checkOnlyOne = (check) => {
    const checkboxes = document.getElementsByName("test");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== check) {
        checkboxes[i].checked = false;
      }
    }
  };
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [image, setImage] = useState();

  const onImageHandler = (event) => {
    event.preventDefault();
    const image = event.target.files[0];
    setImage([...image,{image: image}]);
  };

  const getTitle = (event) => {
    setTitle(event.target.value);
  };
  const getContent = (event) => {
    setContent(event.target.value);
  };
  const getStart = (e) => {
    setStartdate(e.target.value);
  };
  const getEnd = (e) => {
    setEnddate(e.target.value);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("image", image);
    const hi = {
      category: category,
      title: title,
      content: content,
      startDate: startdate,
      endDate: enddate,
      currentParticipant: 1,
      maxParticipant: 10,
      writer: "youm",
    };

    //   const blob = new Blob([JSON.stringify(hi)], {
    //   type: "application/json",
    // });
    // formData.append("requestDto", blob);

    formData.append("requestDto", JSON.stringify(hi));

    //console.log(formData)///

    for (let value of formData.values()) {
      console.log(value);
    }
    axios.post(`/hong-si`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const imageInput = useRef();
  const onCickImageUpload = () => {
    imageInput.current.click();
  };
  return (
    <MainContentContainer>
      <MainCenterWrapper>
        <ColumnWrapper>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="제목"
              onChange={getTitle}
              name="title"
              style={{ width: "100%" }}
            />
            <input type="date" placeholder="시작날짜" onChange={getStart} />
            <input type="date" placeholder="끝날짜" onChange={getEnd} />
            <div>
            <input
                type="file"
                style={{ display: "none" }}
                ref={imageInput}
                onChage={onImageHandler}
              />
              <button className="mt-16" onClick={onCickImageUpload}>이미지업로드</button>
              </div>
            
            <Input
              type="text"
              placeholder="함께하고 싶은 목표를 설정해주세요"
              onChange={getContent}
              name="title"
              className="mt-16"
            />
          </div>
          <AlbumCheck>
            {CATEGORY_LIST.map((item) => (
              <div>
                <Checkbox
                  type="checkbox"
                  value={item.data}
                  onChange={(e) => {
                    checkOnlyOne(e.target);
                    setCategory(e.target.value);
                    console.log(category);
                  }}
                />
                <label>{item.data}</label>
              </div>
            ))}
          </AlbumCheck>

          <SigButton
            style={{
              width: "20%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={handleSubmit}
          >
            저장
          </SigButton>
        </ColumnWrapper>
      </MainCenterWrapper>
    </MainContentContainer>
  );
};

export default Write;
