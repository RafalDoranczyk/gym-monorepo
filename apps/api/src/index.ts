import { log } from '@repo/logger';
import 'dotenv/config';
import { FastifyInstance } from 'fastify';
import 'reflect-metadata';

import container, { ConfigModuleInterface, ConfigSymbols } from './container';

/**
 * Run the server!
 */
async function start() {
  const { API_HOST, API_PORT } = container.get<ConfigModuleInterface>(
    ConfigSymbols.Config,
  );
  const server = await container.getAsync<FastifyInstance>(ConfigSymbols.Server);

  try {
    server.swagger();
    server.listen({ host: API_HOST, port: API_PORT });

    log().info(`Server listening on ${API_HOST}:${API_PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
