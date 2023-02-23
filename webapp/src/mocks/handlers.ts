import { rest } from 'msw';
import { URL } from '../constants';

export const handlers = [
  rest.get(`${URL.domain}`, (_req, res, ctx) => {
    return res(
      ctx.status(200), 
      ctx.json([
        {
          "id":74,
          "createdAt":"2000-01-01T05:00:00.000Z",
          "updatedAt":"2000-01-01T05:00:00.000Z",
          "title":"Pan",
          "text":"Lorem ipsum dol"
        }
      ]
    ))
  }),
]
