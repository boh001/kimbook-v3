import React, { forwardRef } from "react";
import {
  SignUpInput,
  SignUpInputLabel,
  LabelText,
  CheckText,
  CodeBtn,
} from "./SignUpInfo.style";
import MiniLoading from "Components/MiniLoading/MiniLoading";
import PropTypes from "prop-types";

const SignUpInfo = forwardRef(
  (
    {
      label,
      type,
      placeholder,
      name,
      show,
      result,
      btn,
      btnEvent,
      check,
      inputEvent,
      isLoading,
    },
    ref
  ) => {
    return (
      <SignUpInputLabel>
        <LabelText>{label}</LabelText>
        <SignUpInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={inputEvent && ((e) => inputEvent(e))}
        />
        {show ? (
          <CheckText check={result}>{result ? check[0] : check[1]}</CheckText>
        ) : null}
        {btn && (
          <CodeBtn onClick={(e) => btnEvent(e)}>
            {isLoading ? <MiniLoading /> : btn}
          </CodeBtn>
        )}
      </SignUpInputLabel>
    );
  }
);
SignUpInfo.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  show: PropTypes.boolean,
  result: PropTypes.boolean,
  btn: PropTypes.string,
  btnEvent: PropTypes.func,
  check: PropTypes.array,
  isLoading: PropTypes.boolean,
  inputEvent: PropTypes.func,
};
SignUpInfo.defaultProps = {
  show: false,
  result: false,
  btn: "",
  btnEvent: () => {},
  isLoading: false,
  check: [],
  inputEvent: () => {},
};
export default SignUpInfo;
