import { FastifyInstance } from 'fastify';

export default function routes(fastify: FastifyInstance, _: any, done: () => void) {
  fastify.get(
    '/ping',
    {
      schema: {
        description: 'App health status',
        response: {
          200: {
            description: 'App health status',
            properties: {
              status: {
                type: 'string',
              },
            },
            type: 'object',
          },
        },
        summary: 'health',
        tags: ['health'],
      },
    },
    (_, reply) => {
      reply.status(200).send({ status: 'ok' });
    },
  );

  done();
}
