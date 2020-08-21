import styled from "styled-components";

export const Input = styled.input.attrs((props) => {
  return {
    type: props.type,
    placeholder: props.placeholder,
    value: props.value,
    name: props.name,
    required: true,
  };
})`
  width: 100%;
  font-size: inherit;
  padding: 0.5em 1em;
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: 40px;
`;
export const LabelText = styled.span`
  display: block;
  padding: 0.5em 0;
`;
