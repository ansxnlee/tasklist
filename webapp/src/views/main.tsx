import { Card } from '../components/Card';
import { RouteButton } from '../components/RouteButton';
import { Title } from '../components/Title';
import { ViewContainer } from '../components/ViewContainer';

const Main = () => {
  return (
    <ViewContainer height='100%'>
      <Title text='Tasklist' />
      <RouteButton text='Create New Task' href='/newtask' />
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
