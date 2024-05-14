import React from "react";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">회원가입</div>
        </div>
        <img className="line" alt="Line" src="line-1.png" />
        <img className="img" alt="Line" src="line-2.png" />
        <img className="line-2" alt="Line" src="line-4.png" />
        <div className="text-wrapper-2">로그인</div>
        <div className="text-wrapper-3">idéa</div>
        <div className="text-wrapper-4">아이디어 게시판</div>
        <div className="text-wrapper-5">개발자 목록</div>
        <img className="line-3" alt="Line" src="line-3.png" />
        <div className="text-wrapper-6">채팅 목록</div>
        <div className="search-field">
          <div className="search-glyph">􀊫</div>
          <div className="placeholder-label">검색</div>
        </div>
        <div className="idea-post">
          <div className="text-wrapper-7">
            아이디어 게시판 <br />
            미리보기
          </div>
        </div>
        <div className="developer-list">
          <div className="text-wrapper-8">
            개발자 목록 <br />
            미리보기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;