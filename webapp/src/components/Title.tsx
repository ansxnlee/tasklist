import styled from '@emotion/styled';
import { COLORS } from '../constants';

export const Title = ({text}: {text?: string}) => {
  return (
    <TextContainer>
      <Text>{text}</Text>
    </TextContainer>
  )
}

const TextContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  border-bottom-style: double;
  border-color: ${COLORS.text};
`;

const Text = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: ${COLORS.text};
`;