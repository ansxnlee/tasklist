import { RouteButton } from '../components/RouteButton';
import { Title } from '../components/Title';
import { ViewContainer } from '../components/ViewContainer';

const Create = () => {
  return (
    <ViewContainer height='100%'>
      <Title text='Create Task' />
      <RouteButton text='Home' href='/'/>
    </ViewContainer>
  );
}

export default Create;
