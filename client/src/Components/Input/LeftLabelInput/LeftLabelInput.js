import React from "react";
import { Input, Label, LabelText } from "./TopLabelInput.style";
import PropTypes from "prop-types";

const LeftLabelInput = ({ label, type, placeholder, value, name }) => {
  return (
    <Label>
      <LabelText>{label}</LabelText>
      <Input type={type} placeholder={placeholder} value={value} name={name} />
    </Label>
  );
};
LeftLabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default LeftLabelInput;
