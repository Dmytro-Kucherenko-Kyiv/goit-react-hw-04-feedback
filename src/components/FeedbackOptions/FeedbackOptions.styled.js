import styled from "styled-components";

export const OptionsWrap = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const Button = styled.button`
  font-size: 20px;
  padding: 7px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.buttonColor};
  border-radius: 50% 20% / 10% 40%;
  cursor:pointer;

  &:hover {
    color:  ${p => p.theme.colors.textAccent};
    background-color: ${p => p.theme.colors.text};
  }
  `