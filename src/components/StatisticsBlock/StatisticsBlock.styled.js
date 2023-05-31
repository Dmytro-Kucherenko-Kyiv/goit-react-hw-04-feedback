import styled from "styled-components";

export const List = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`
export const Good = styled.li`
  color: ${p => p.theme.colors.good};
  font-size: 30px;
`

export const Neutral = styled.li`
  color: ${p => p.theme.colors.neutral};
  font-size: 30px;
`
export const Bad = styled.li`
  color: ${p => p.theme.colors.bad};
  font-size: 30px;
`

export const Total = styled.li`
  color: ${p => p.theme.colors.total};
  font-size: 35px;
`

export const Positive = styled.li`
  color: ${p => p.theme.colors.positive};
`