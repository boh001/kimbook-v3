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
  WriteScroll,
} from "./Write.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faTh,
  faArrowLeft,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  showUploadAction,
  showThumbnailAction,
  showTagAction,
} from "modules/reducers/Write";
export default () => {
  const dispatch = useDispatch();
  const {
    slide: { thumbnail, tag },
    uploads,
  } = useSelector((state) => state.Write);
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
  const showThumbnail = useCallback(() => {
    dispatch(showThumbnailAction({ slide: { thumbnail: true } }));
  });
  const hiddenThumbnail = useCallback(() => {
    dispatch(showThumbnailAction({ slide: { thumbnail: false } }));
  });
  const showTag = useCallback(() => {
    dispatch(showTagAction({ slide: { tag: true } }));
  });
  const hiddenTag = useCallback(() => {
    dispatch(showTagAction({ slide: { tag: false } }));
  });
  return (
    <>
      <WriteFrame>
        <WriteWrapper slide={thumbnail || tag}>
          <WriteSlide>
            <WriteForm>
              <WriteHeader>내 게시물 만들기</WriteHeader>
              <WriteText />
              <WriteOptions>
                <WriteOption onClick={showTag}>
                  <FontAwesomeIcon icon={faUserTag} />
                </WriteOption>
                <WriteOption onClick={showThumbnail}>
                  <FontAwesomeIcon icon={faTh} />
                </WriteOption>
                <WriteOption>
                  <WriteFile onChange={(e) => showUpload(e)} />
                  <FontAwesomeIcon icon={faUpload} />
                </WriteOption>
              </WriteOptions>
              <WriteSubmit />
            </WriteForm>
          </WriteSlide>
          {!tag && (
            <WriteSlide>
              <WriteBack onClick={hiddenThumbnail}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </WriteBack>
              <WriteHeader>Thumbnail</WriteHeader>
              <WriteScroll>
                <WriteUploads>
                  {uploads.map((upload, key) => {
                    if (upload.split("/")[0].split(":")[1] === "image") {
                      return <UploadImg key={key} src={upload} />;
                    } else {
                      return <UploadVideo key={key} src={upload} />;
                    }
                  })}
                </WriteUploads>
              </WriteScroll>
            </WriteSlide>
          )}

          <WriteSlide>
            <WriteBack onClick={hiddenTag}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </WriteBack>
            <WriteHeader>Tag</WriteHeader>
            <WriteScroll>
              <WriteUploads></WriteUploads>
            </WriteScroll>
          </WriteSlide>
        </WriteWrapper>
      </WriteFrame>
    </>
  );
};
