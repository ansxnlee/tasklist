import { ViewContainer } from '../components/ViewContainer';
import { Title } from '../components/Title';
import { RouteButton } from '../components/RouteButton';
import { CreateCard } from '../components/CreateCard';

const Create = () => {
  return (
    <ViewContainer height='100%'>
      <Title text='Create Task' />
      <RouteButton text='Home' href='/'/>
      <CreateCard />
    </ViewContainer>
  );
}

export default Create;
