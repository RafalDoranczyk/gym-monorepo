import { FastifyInstance } from 'fastify';

import publicRoutes from './public';

export default function Api(server: FastifyInstance) {
  server.register((fastify, _, done) => {
    publicRoutes.forEach(route => {
      fastify.register(route);
    });

    done();
  });
}
