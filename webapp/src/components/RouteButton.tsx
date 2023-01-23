import styled from '@emotion/styled';
import { COLORS } from '../constants';

export const RouteButton = ({text, href}: {text?: string, href?: string}) => {
  return (
    <a href={href}>
      <Button type='button'>{text}</Button>
    </a>
  )
}

const Button = styled.button`
  padding: 16px;
  background-color: ${COLORS.background};
  font-size: 1.5em;
  border-radius: 15px;
  border-color: ${COLORS.text};
  color: ${COLORS.text};
  font-weight: bold;
  &:hover {
    color: ${COLORS.highlight};
    border-color: ${COLORS.highlight};
    cursor: pointer;
  }
`