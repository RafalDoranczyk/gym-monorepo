import pino, { Logger } from 'pino';
import pretty from 'pino-pretty';

export const log = (): Logger => {
  const stream = pretty({
    colorize: true,
  });

  return pino({ level: 'info' }, stream);
};
