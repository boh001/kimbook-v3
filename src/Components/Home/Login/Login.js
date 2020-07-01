import React from "react";
import {
  LoginFrame,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginSubmit,
  FindPassword,
  SignUp,
  LineFrame,
  Line,
  LineText,
} from "./Login.style";
export default () => (
  <>
    <LoginFrame>
      <LoginForm>
        <LoginLabel>
          아이디
          <LoginInput type={"text"} placeholder={"아이디를 입력하세요"} />
        </LoginLabel>
        <LoginLabel>
          비밀번호
          <LoginInput type={"password"} placeholder={"비밀번호를 입력하세요"} />
        </LoginLabel>
        <LoginSubmit type={"submit"} value={"로그인"} />
      </LoginForm>
      <FindPassword>계정을 잊으셨나요?</FindPassword>
      <LineFrame>
        <Line />
        <LineText>또는</LineText>
        <Line />
      </LineFrame>
      <SignUp>회원가입</SignUp>
    </LoginFrame>
  </>
);
