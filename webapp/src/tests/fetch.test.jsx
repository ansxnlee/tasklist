import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { CardList } from '../components/CardList';
import { BrowserRouter } from 'react-router-dom';

test('fetch tasks', async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );
  })
  const taskElement = await screen.getByText('Pan');
  expect(taskElement).toBeInTheDocument();
});
