import { log } from '@repo/logger';
import 'dotenv/config';
import { FastifyInstance } from 'fastify';
import 'reflect-metadata';

import container, { ConfigModuleInterface, ConfigSymbols } from './container';

/**
 * Run the server!
 */
async function start() {
  const { host, port } = container.get<ConfigModuleInterface>(ConfigSymbols.Config);
  const server = await container.getAsync<FastifyInstance>(ConfigSymbols.Server);

  try {
    server.swagger();
    server.listen({ host, port });

    log(`Server listening on ${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
