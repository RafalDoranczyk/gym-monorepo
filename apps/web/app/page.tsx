import { log } from '@repo/logger';

const a = 'fe';
export const metadata = {
  title: 'Store | Kitchen Sink',
};

export default function Store() {
  log('Hey! This is the Store page.');

  return <h1>page</h1>;
}
