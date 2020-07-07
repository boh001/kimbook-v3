import React, { forwardRef } from "react";
import {
  SignUpInput,
  SignUpInputLabel,
  LabelText,
  CheckText,
  CodeBtn,
} from "./SignUpInfo.style";

export default forwardRef(
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
        {btn && <CodeBtn onClick={(e) => btnEvent(e)}>{btn}</CodeBtn>}
      </SignUpInputLabel>
    );
  }
);
