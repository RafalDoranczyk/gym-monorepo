import ApplicationAPI from '@/api';
import { ConfigSymbols } from '@/container/symbols';
import fastify from 'fastify';
import { ContainerModule, interfaces } from 'inversify';

import * as Plugins from './plugins';

export default new ContainerModule(bind => {
  const server = fastify({
    ajv: {
      customOptions: {
        allErrors: true,
        coerceTypes: true,
        // Don't get it, but it works only with this option
        keywords: ['kind', 'modifier'],
        messages: true,
        removeAdditional: true,
      },
    },
    logger: true,
  });

  server.ready();

  // PLUGINS
  Plugins.FastifyHelmetPlugin(server);
  Plugins.FastifyCORSPlugin(server);
  Plugins.FastifySwaggerPlugin(server);

  ApplicationAPI(server);

  bind(ConfigSymbols.Server).toDynamicValue((context: interfaces.Context) =>
    server.decorateRequest('container', { getter: () => context.container }),
  );
});
