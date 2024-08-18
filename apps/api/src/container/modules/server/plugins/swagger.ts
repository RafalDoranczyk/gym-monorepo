import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { FastifyInstance } from 'fastify';

/** @param {import('fastify').FastifyInstance} app */
export default function swaggerPlugin(app: FastifyInstance) {
  app.register(fastifySwagger, {
    swagger: {
      consumes: ['application/json'],
      host: 'localhost',
      info: {
        description: 'Testing the Fastify swagger API',
        title: 'Test swagger',
        version: '0.1.0',
      },
      produces: ['application/json'],
      schemes: ['http'],
      securityDefinitions: {
        apiKey: {
          in: 'header',
          name: 'apiKey',
          type: 'apiKey',
        },
      },
      tags: [{ description: 'Health related end-points', name: 'health' }],
    },
  });

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });

  return app;
}
