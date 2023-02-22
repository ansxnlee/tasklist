import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from '../components/Card';
import { BrowserRouter } from 'react-router-dom';

test('card component delete trigger', async () => {
  render(
    <BrowserRouter>
      <Card title='test title' text='test text' taskid='999' />
    </BrowserRouter>
  );
  await userEvent.click(screen.getByText('Delete Task'));
  const buttonElement = screen.getByText('Confirm');
  expect(buttonElement).toBeInTheDocument();
});
