import styled from '@emotion/styled';
import { COLORS } from '../constants';
import { Props } from '../utils/types';

interface CardContainerProps extends Props {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
}

/**
 * Task Card Component
 * @param title - title of task (max 20 char.)
 * @param text - text of task (max 150 char.)
 * @returns JSX Element
 */
export const Card = ({ title, text }: {title?: string, text?: string}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
}

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  background-color: ${COLORS.componentBackground};
`;

const CardTitle = styled.div`
  font-size: 1.5em;
  color: ${COLORS.text};
`;

const CardText = styled.span`
  color: ${COLORS.text};
`