const base = '/api';
const version = '/v1';

const getBase = (val: string) => `${base}/${version}/${val}`;

export const ENDPOINTS = {
  INGREDIENTS: getBase('ingredients'),
  PING: getBase('ping'),
};
