import React, { useCallback, useState, useRef } from "react";
import {
  WriteFrame,
  WriteHeader,
  WriteForm,
  WriteText,
  WriteSubmit,
  WriteOptions,
  WriteOption,
  WriteFile,
  WriteSlide,
  WriteWrapper,
  WriteBack,
  WriteUploads,
  UploadImg,
  UploadVideo,
} from "./Write.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faTh,
  faArrowLeft,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showUploadAction, showSlideAction } from "modules/reducers/Write";
export default () => {
  const dispatch = useDispatch();
  const { slide, uploads } = useSelector((state) => state.Write);
  const readUpload = (inputFile) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        const { result } = e.target;
        resolve(result);
      };
      reader.readAsDataURL(inputFile);
    });
  };
  const showUpload = useCallback(async (e) => {
    const {
      target: { files },
    } = e;
    let uploads = [];
    const filesSlice = Array.from(files);
    for (let idx in filesSlice) {
      if (filesSlice[idx]) {
        const upload = await readUpload(filesSlice[idx]);
        uploads.push(upload);
      }
    }
    dispatch(showUploadAction({ uploads }));
  });
  const showSlide = useCallback(() => {
    dispatch(showSlideAction({ slide: true }));
  });
  const hiddenSlide = useCallback(() => {
    dispatch(showSlideAction({ slide: false }));
  });
  return (
    <>
      <WriteFrame>
        <WriteWrapper slide={slide}>
          <WriteHeader>내 게시물 만들기</WriteHeader>
          <WriteForm>
            <WriteText />
            <WriteOptions>
              <WriteOption>
                <FontAwesomeIcon icon={faUserTag} />
              </WriteOption>
              <WriteOption onClick={showSlide}>
                <FontAwesomeIcon icon={faTh} />
              </WriteOption>
              <WriteOption>
                <WriteFile onChange={(e) => showUpload(e)} />
                <FontAwesomeIcon icon={faUpload} />
              </WriteOption>
            </WriteOptions>
            <WriteSubmit />
          </WriteForm>
        </WriteWrapper>
        <WriteSlide slide={slide}>
          <WriteBack onClick={hiddenSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </WriteBack>
          <WriteHeader>업로드</WriteHeader>
          <WriteUploads>
            {uploads.map((upload, key) => (
              <UploadImg key={key} src={upload} />
            ))}
          </WriteUploads>
        </WriteSlide>
      </WriteFrame>
    </>
  );
};
