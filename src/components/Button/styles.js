import styled from "styled-components";

export const ButtonBase = styled.button`
  background: rgb(9, 9, 121);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 0.5410539215686274) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  border: 2px solid black;
  margin: 1px;
  cursor: pointer;

  &:hover {
    background: rgb(11, 11, 98);
    background: linear-gradient(
      90deg,
      rgba(11, 11, 98, 0.5410539215686274) 35%,
      rgba(0, 153, 184, 1) 100%
    );
  }

  &.operator {
    background: rgb(196, 26, 65);
    background: linear-gradient(
      90deg,
      rgba(196, 26, 65, 0.5410539215686274) 35%,
      rgba(249, 3, 66, 1) 100%
    );
    &:hover {
      background: rgb(134, 19, 45);
      background: linear-gradient(
        90deg,
        rgba(134, 19, 45, 1) 35%,
        rgba(195, 3, 52, 1) 100%
      );
    }
  }
`;

export const Text = styled.span`
  font-size: 18px;
  color: #fff;
`;
