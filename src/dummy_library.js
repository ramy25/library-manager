import { dateToIsoFormat } from './helperFunctions';

export const DUMMY_LIBRARY = [
  {
    name: 'Overdue Book',
    price: 123,
    isbn: '123-123-123-123-1',
    overdue: true,
    borrowed: true,
    borrowedDate: dateToIsoFormat(new Date('2022-04-01')),
    id: Math.random().toString(),
  },
  {
    name: 'Book1',
    price: 100,
    isbn: '123-123-123-12-13',
    overdue: false,
    borrowed: false,
    borrowedDate: null,
    id: Math.random().toString(),
  },
  {
    name: 'Book2',
    price: 100,
    isbn: '123-123-123-12-13',
    overdue: false,
    borrowed: false,
    borrowedDate: null,
    id: Math.random().toString(),
  },
  {
    name: 'Book3',
    price: 100,
    isbn: '123-123-123-1-123',
    overdue: false,
    borrowed: false,
    borrowedDate: null,
    id: Math.random().toString(),
  },
];
