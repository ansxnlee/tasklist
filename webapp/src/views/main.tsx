import { ViewContainer } from '../components/ViewContainer';
import { Title } from '../components/Title';
import { RouteButton } from '../components/RouteButton';
import { CardList } from '../components/CardList';

const Main = () => {
  return (
    <ViewContainer height='100%'>
      <Title text='Tasklist' />
      <RouteButton text='Create New Task' href='/newtask' />
      <CardList />
    </ViewContainer>
  );
}

export default Main;
