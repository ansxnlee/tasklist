import styled from '@emotion/styled'
import { Card } from '../components/Card';
import { ViewContainer } from '../components/ViewContainer';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Main = () => {
  return (
    <ViewContainer height='100%'>
      <h1>main page</h1>
      <Button>test button</Button>
      <Card 
        title='Lorem ipsum dolor si' 
        text='
        Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque 
        penatibus et magnis disp.
        '
      />
    </ViewContainer>
  );
}

export default Main;
